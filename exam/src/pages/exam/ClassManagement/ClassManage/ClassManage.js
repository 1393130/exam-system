import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import style from './ClassManage.scss'
import { Button, Modal, Form, Input, Radio, Table, Divider, Tag, Spin, message, Select } from 'antd';

function ClassManage(props) {
    if (props.gradeInfo === 1) {
        message.success("创建班级成功")
    }
    useEffect(() => {
        props.getGrade() //获取已经分配教室的班级
        props.getRoom()//获取所有教室
        props.getSubject()//获取课程
    }, [])
    const { Column, ColumnGroup } = Table;
    const { getFieldDecorator } = props.form;
    const { Option } = Select;
    //改变的弹框的显示隐藏
    const [visible, changeVisible] = useState(false);
    const [confirmLoading, changeConfir] = useState(false);
    //设置默认onchange的值
    const [onValue, onChangeValue] = useState('')
    //设置编辑值
    const [edit_flag, change_edit_flag] = useState(false)
    //默认编辑值
    const [edit_info, change_edit_info] = useState({})
    //点击添加类型的按钮
    let showModal = () => {
        changeVisible(true);
        change_edit_flag(false)
        // change_edit_info({})
    };
    //点击弹框的取消按钮
    let handleCancel = () => {
        changeVisible(false);
    };
    //删除
    let delete_action = ({ grade_id }) => {
        props.deleteGrade({grade_id})
    }
    //编辑
    let edit_action = (Obj) => {
        changeVisible(true);
        change_edit_flag(true)
        change_edit_info(Obj)
    }
    //表单提交
    let handleOk = () => {
        props.form.validateFields((err, values) => {
            if (!err) {
                if (edit_flag) {
                    //编辑
                    let edit_obj={}
                    if(edit_info.room_text===values.room_id_edit){
                        edit_obj.room_id=edit_info.room_id
                    }
                    if(edit_info.subject_text===values.subject_id_text){
                        edit_obj.subject_id=edit_info.subject_id
                    }
                    edit_obj.room_id=values.room_id_edit
                    edit_obj.subject_id=values.subject_id_edit
                    edit_obj.grade_name=values.grade_name_edit
                    edit_obj.grade_id=edit_info.grade_id
                    console.log(edit_obj)
                    change_edit_info({})
                    props.editGrade(edit_obj)
                } else {
                    //添加
                    change_edit_info({})
                    props.addGrade(values)
                }
                changeVisible(false);
            }
        });
    };
    return (
        <div className={style.question_box}>
            {props.global ? <div className={style.loading}><Spin /></div> : null}
            <header className={style.question_header}>
                <h2>班级管理</h2>
            </header>
            <section className={style.question_main}>
                <div className={style.question_main_Add}>
                    <div>
                        <Button type="primary" onClick={showModal} style={{ width: 200, height: 50, background: '#446DFF', fontSize: 18 }} >
                            + 添加班级
                        </Button>
                        <Modal
                            visible={visible}
                            title={edit_flag ? "修改班级" : "添加班级"}
                            onCancel={() => handleCancel(false)}
                            onOk={() => handleOk()}
                        >
                            <Form onSubmit={handleOk}>
                                {edit_flag ? <Form.Item label="班级名：">
                                    {getFieldDecorator('grade_name_edit', {
                                        initialValue: edit_info.grade_name
                                    })(
                                        <Input
                                            placeholder="班级名："
                                            disabled={true}
                                        />,
                                    )}
                                </Form.Item> :
                                    <Form.Item label="班级名：">
                                        {getFieldDecorator('grade_name', {
                                            rules: [{ required: true, message: '请输入试题类型!' }],
                                        })(
                                            <Input
                                                placeholder="班级名："
                                            />,
                                        )}
                                    </Form.Item>}
                                { edit_flag?<Form.Item label="教室号：">
                                    {getFieldDecorator('room_id_edit', {
                                        rules: [{ required: true, message: '请输入试题类型!' }],
                                        initialValue: edit_info.room_text
                                    })(
                                        <Select style={{ width: '100%' }}>
                                            {
                                                props.room && props.room.map((item, index) => {
                                                    return <Option value={item.room_id} key={item.room_id}>{item.room_text}</Option>
                                                })
                                            }
                                        </Select>,
                                    )}
                                </Form.Item>:<Form.Item label="教室号：">
                                    {getFieldDecorator('room_id', {
                                        rules: [{ required: true, message: '请输入试题类型!' }],
                                        initialValue: "教室号："
                                    })(
                                        <Select style={{ width: '100%' }}>
                                            {
                                                props.room && props.room.map((item, index) => {
                                                    return <Option value={item.room_id} key={item.room_id}>{item.room_text}</Option>
                                                })
                                            }
                                        </Select>,
                                    )}
                                </Form.Item>}
                                {edit_flag?<Form.Item label="课程名：">
                                    {getFieldDecorator('subject_id_edit', {
                                        rules: [{ required: true, message: '请输入试题类型!' }],
                                        initialValue:edit_info.subject_text
                                    })(
                                        <Select style={{ width: '100%' }}>
                                            {
                                                props.subjectType && props.subjectType.map((item, index) => {
                                                    return <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                                                })
                                            }
                                        </Select>,
                                    )}
                                </Form.Item>:<Form.Item label="课程名：">
                                    {getFieldDecorator('subject_id', {
                                        rules: [{ required: true, message: '请输入试题类型!' }],
                                        initialValue: "课程名："
                                    })(
                                        <Select style={{ width: '100%' }}>
                                            {
                                                props.subjectType && props.subjectType.map((item, index) => {
                                                    return <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                                                })
                                            }
                                        </Select>,
                                    )}
                                </Form.Item>}
                            </Form>
                        </Modal>
                    </div>
                </div>
                <div className={style.question_main_list}>
                    <Table dataSource={props.grade} rowKey="grade_id" style={{ fontSize: 25 }}>
                        <Column title="班级名" dataIndex='grade_name' rowKey="grade_id" />
                        <Column title="课程名" dataIndex="subject_text" rowKey="subject_id" />
                        <Column title="教室号" dataIndex="room_text" rowKey="room_id" />
                        <Column
                            title="操作"
                            key="action"
                            render={(text, record) => (
                                <span>
                                    <a href="javascript:;" onClick={() => { edit_action(text) }}>编辑</a>
                                    <Divider type="vertical" />
                                    <a href="javascript:;" onClick={() => { delete_action(text) }}>删除</a>
                                </span>
                            )}
                        />
                    </Table>
                </div>
            </section>
        </div>
    );
}

ClassManage.propTypes = {
};
const mapToProps = state => {
    return { ...state, ...state.ClassManage, ...state.getSubject }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //获取已经分配教室的班级
        getGrade: () => {
            dispatch({
                type: 'ClassManage/getGrade'
            })
        },
        //获取所有教室
        getRoom: () => {
            dispatch({
                type: 'ClassManage/getRoom'
            })
        },
        //获取课程类型
        getSubject: () => {
            dispatch({
                type: "getSubject/getSubject"
            })
        },
        //添加班级接口
        addGrade: payload => {
            dispatch({
                type: 'ClassManage/addGrade',
                payload
            })
        },
        //删除班级接口
        deleteGrade: payload => {
            dispatch({
                type: 'ClassManage/deleteGrade',
                payload
            })
        },
        //更新班级信息
        editGrade: payload => {
            dispatch({
                type: 'ClassManage/editGrade',
                payload
            })
        },

    }
}
export default connect(mapToProps, mapDispatchToProps)(Form.create()(ClassManage));

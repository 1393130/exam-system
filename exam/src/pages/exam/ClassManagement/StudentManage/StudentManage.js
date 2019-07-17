import React , {useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './StudentManage.scss'
import { Tag, Button, Select, Form , Radio , Table , Divider ,Input , Icon} from 'antd';
import {injectIntl} from 'react-intl';

function StudentManage(props) {
    console.log(props)
    //从form中校验
    const { getFieldDecorator } = props.form;
    const { Option } = Select;
    const { Column, ColumnGroup } = Table
    useEffect(() => {
        props.StudentList()
    },[])
    // //处理表单提交
    let handleSubmit = () => {
        props.form.validateFields((err, values) => {
        if (!err) {
            props.EaxminAtions({}) 
        }
        });
    };
    //重置
    let handleReset = () => {
        props.form.resetFields();
    };
    let data = []
    return (
        <div className={styles.StudentManage_wrap}>
            <h2>{props.intl.formatMessage({id: 'router.ClassManage.studentmanage'})}</h2>
            <div className={styles.StudentManage_type}>
            <div className={styles.StudentManage_form}>
            <Form layout="inline" onSubmit={handleSubmit}>
                <Form.Item>
                        {getFieldDecorator('username', {
                            validateFirst: "onBlur",
                            rules: [
                            { required: true, message: 'Please input your username!' },
                            { min: 6, max: 15, message: "6到15位组成" }
                            ],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="输入学生姓名"
                            />,
                        )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('exam_id', {
                          initialValue: "请选择教室号"
                    })(
                    <Select style={{ width: 200 }}>
                    {/* {
                        props.examType && props.examType.map((item, index) => {
                           return <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                        })
                    } */}
                    </Select>,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('subject_id', {
                        initialValue: "班级名"
                    })(
                        <Select style={{ width: 200 }}>
                        {/* {
                            props.subjectType && props.subjectType.map((item, index) => {
                            return <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                            })
                        } */}
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                    type="primary"
                    htmlType="submit"
                        >
                        查询
                    </Button>
                    <Button  type="primary" onClick={handleReset}>重置</Button>
                </Form.Item>
              </Form>
            </div>
            </div>
            <div className={styles.StudentManage_cont}>
            <div className={styles.ExamList_list_list}>
                    <Table dataSource={data} rowKey="exam_id">
                        <Column title="姓名" dataIndex='title' rowKey="title" />
                        <Column title="学号" dataIndex="room_text" rowKey="room_text" />
                        <Column title="班级" dataIndex="user_name1" rowKey="user_name1" />
                        <Column title="教室" dataIndex="user_name2" rowKey="user_name2" />
                        <Column title="密码" dataIndex="user_name3" rowKey="user_name3" />
                        <Column 
                            title="操作"
                            key="action"
                            render={(text, record) => (
                                <span>
                                    删除
                                </span>
                            )}
                        />
                    </Table> 
                </div>
            </div>
        </div>
    );
}

StudentManage.propTypes = {
};
let mapStateProps = (state) => {
    return {
        ...state,
        ...state.StudentList
    }
}
let mapDispatchProps = (dispatch) => {
   return {
    StudentList() {
            dispatch({
                type:'Student/StudentList'
            })
        }
   }
}
export default injectIntl(connect(mapStateProps,mapDispatchProps)(Form.create()(StudentManage)));

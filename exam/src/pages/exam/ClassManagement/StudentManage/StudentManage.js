import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './StudentManage.scss'
import { injectIntl } from 'react-intl';
import { Button, Select, Form, Table, Input, Icon, Modal } from 'antd';
function StudentManage(props) {
    //已经分班的
    let { classes } = props.Student
    //没有分班的
    let { StudentWithoutList } = props.Student
    //合并后的所有班级
    let allStudent = [...classes, ...StudentWithoutList]
    //从form中校验
    const { getFieldDecorator } = props.form;
    const { Option } = Select;
    const { Column } = Table;
    const { confirm } = Modal;
    useEffect(() => {
        props.StudentList()
        props.StudentWithoutClasses()
        props.getRoom()
        props.getGrade()
    }, [])
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
    //分页器
    let pagination = {
        defaultPageSize: 20,
        showQuickJumper: true,
        showSizeChanger: true
    }
    let data = allStudent
    //删除学生
    let StudentDelete = (item) => {
        confirm({
            title: '删除',
            content: '确定删除吗？',
            onOk() {
                props.ScholasticDelete({ id: item.student_id })
            },
            onCancel() {
            },
        });

    }
    return (
        <div className={styles.StudentManage_wrap}>
            <h2>{props.intl.formatMessage({ id: 'router.ClassManage.studentmanage' })}</h2>
            <div className={styles.StudentManage_type}>
                <div className={styles.StudentManage_form}>
                    <Form layout="inline" onSubmit={handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                validateFirst: "onBlur",
                                rules: [
                                    { required: true, message: 'Please input your username!' },
                                    { min: 3, max: 15, message: "6到15位组成" }
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
                                    {
                                        props.room && props.room.map((item, index) => {
                                            return <Option value={item.room_id} key={item.room_id}>{item.room_text}</Option>
                                        })
                                    }
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('subject_id', {
                                initialValue: "班级名"
                            })(
                                <Select style={{ width: 200 }}>
                                    {
                                        props.grade && props.grade.map((item, index) => {
                                            return <Option value={item.grade_id} key={item.grade_id}>{item.grade_name}</Option>
                                        })
                                    }
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
                            <Button type="primary" onClick={handleReset}>重置</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className={styles.StudentManage_cont}>
                <div className={styles.ExamList_list_list}>
                    <Table dataSource={data} rowKey="student_id"
                        pagination={pagination}
                        style={{ background: "#ffffff" }}
                    >
                        <Column title="姓名" dataIndex='student_name' rowKey="student_name" />
                        <Column title="学号" dataIndex="student_id" rowKey="student_id" />
                        <Column title="班级" dataIndex="room_text" rowKey="room_text" />
                        <Column title="教室" dataIndex="grade_name" rowKey="grade_name" />
                        <Column title="密码" dataIndex="student_pwd" rowKey="student_pwd" />
                        <Column
                            title="操作"
                            key="action"
                            render={(text, record) => (
                                <span onClick={() => StudentDelete(text)}>
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
        ...state.StudentList,
        ...state.StudentWithoutClasses,
        ...state.ClassManage
    }
}
let mapDispatchProps = (dispatch) => {
    return {
        //分班
        StudentList() {
            dispatch({
                type: 'Student/StudentList'
            })
        },
        //没有分班
        StudentWithoutClasses() {
            dispatch({
                type: 'Student/StudentWithoutClasses'
            })
        },
        //删除学生
        ScholasticDelete(payload) {
            dispatch({
                type: 'Student/ScholasticDelete',
                payload
            })
        },
        //获取所有教室
        getRoom: () => {
            dispatch({
                type: 'ClassManage/getRoom'
            })
        },
        //获取已经分配教室的班级
        getGrade: () => {
            dispatch({
                type: 'ClassManage/getGrade'
            })
        },
    }
}
export default injectIntl(connect(mapStateProps, mapDispatchProps)(Form.create()(StudentManage)));

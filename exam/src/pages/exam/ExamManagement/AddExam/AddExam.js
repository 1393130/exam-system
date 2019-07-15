import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './AddExam.scss'
import { Form, Input, Button, Select, InputNumber, DatePicker, message } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';

function AddExam(props) {
    if (props.add_exam_info === 1) {
        message.success("创建试卷成功")
    }
    const { getFieldDecorator } = props.form;
    useEffect(() => {
        props.getExamType()//获取考试类型
        props.getSubject()//获取课程类型
        props.getTopicType()//获取题目类型
    }, [])
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                values.start_time = +values.start_time;
                values.end_time = +values.end_time
                values.number = values.number * 1
                props.addExam(values)
            }
        });
    };
    const { Option } = Select;
    const { RangePicker, MonthPicker } = DatePicker;
    return (
        <div className={styles.AddExam}>
            <h2>添加考试</h2>
            <div className={styles.addexam_cont}>
                <Form onSubmit={handleSubmit} className="login-form">
                    <div>
                        <Form.Item label="试卷名称：">
                            {getFieldDecorator('title', {

                            })(
                                <Input
                                    style={{ width: '40%', height: 50 }}
                                />,
                            )}
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="选择考试类型：">
                            {getFieldDecorator('exam_id', {

                            })(
                                <Select style={{ width: 200 }}>
                                    {
                                        props.examType && props.examType.map((item, index) => {
                                            return <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                                        })
                                    }
                                </Select>,
                            )}
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="选择课程：：">
                            {getFieldDecorator('subject_id', {

                            })(
                                <Select style={{ width: 200 }}>
                                    {
                                        props.subjectType && props.subjectType.map((item, index) => {
                                            return <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                                        })
                                    }
                                </Select>,
                            )}
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="设置题量：">
                            {getFieldDecorator('number', {
                                initialValue: 4
                            })(
                                <InputNumber min={3} max={10} style={{ width: 120 }} />,
                            )}
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="考试时间：：">
                            <Form.Item style={{ display: 'inline-block' }}>
                                {getFieldDecorator('start_time', {
                                    rules: [{ required: true, message: '请选择开始时间!' }],
                                })(
                                    <DatePicker placeholder="开始时间"
                                        format="YYYY-MM-DD HH:mm"
                                        showTime={{ format: 'HH:mm' }}
                                        locale={locale}
                                    />
                                )}
                            </Form.Item>
                            <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>-</span>
                            <Form.Item style={{ display: 'inline-block' }}>
                                {getFieldDecorator('end_time', {
                                    rules: [{ required: true, message: '请选择结束时间!' }],
                                })(
                                    <DatePicker placeholder="结束时间"
                                        format="YYYY-MM-DD HH:mm"
                                        showTime={{ format: 'HH:mm' }}
                                        locale={locale}
                                    />
                                )}
                            </Form.Item>
                        </Form.Item>

                    </div>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: 200, height: 50, fontSize: 25 }}>
                        创建试卷
                    </Button>
                </Form>
            </div>
        </div>
    );
}

AddExam.propTypes = {
};
const mapToProps = state => {
    return { ...state, ...state.getExamType, ...state.getSubject, ...state.getTopicType, ...state.addExam }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //获取考试类型
        getExamType: () => {
            dispatch({
                type: "getExamType/getExamType"
            })
        },
        //获取课程类型
        getSubject: () => {
            dispatch({
                type: "getSubject/getSubject"
            })
        },
        //获取题目类型
        getTopicType: () => {
            dispatch({
                type: "getTopicType/getTopicType"
            })
        },
        //添加考试
        addExam: payload => {
            dispatch({
                type: "AddExam/addExam",
                payload
            })
        }
    }
}
export default connect(mapToProps, mapDispatchToProps)(Form.create()(AddExam));

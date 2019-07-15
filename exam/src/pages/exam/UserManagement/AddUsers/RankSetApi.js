import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './AddUsers.scss'
import { Form, Icon, Input, Button, Checkbox, message, Select, Radio } from 'antd';
function addAttempt(props) {
    useEffect(() => {
        props.getApi_authority()
    }, [])
    //表单验证
    const { getFieldDecorator } = props.form;
    const { Option } = Select;
    return (
        <div className={styles.AddUser_user_page}>
            <div className={styles.AddUser_user_title}>
                <Radio.Group value="rank">
                    <Radio.Button value="rank">给身份设置api接口权限</Radio.Button>
                </Radio.Group>
            </div>
            <div className={styles.AddUser_user_input}>
                <div className={styles.AddUser_user_form}>
                    <Form className="login-form">
                        <div>
                            <Form.Item>
                                {getFieldDecorator('questions_type_id', {
                                    initialValue: "请选择身份id"
                                })(
                                    <Select style={{ width: 200 }}>
                                        {

                                        }
                                    </Select>,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('questions_type_id', {
                                    initialValue: "请选择api接口权限"
                                })(
                                    <Select style={{ width: 200 }}>
                                        {
                                            props.Api_authority ? props.Api_authority.map(item => {
                                                return <Option value={item.api_authority_id} key={item.api_authority_id}>{item.api_authority_text}</Option>
                                            }) : null
                                        }
                                    </Select>,
                                )}
                            </Form.Item>
                        </div>
                        <div className={styles.AddUser_user_Btn}>
                            <Button style={{ width: 120, marginRight: 20 }} type="button" className='ant-btn ant-btn-primary AddUser-btn'>
                                确定
                    </Button>
                            <Button>重置</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

addAttempt.propTypes = {
};
const mapToProps = state => {
    return {
        ...state,
        ...state.AddUser
    }
}
const mapDispatchProps = (dispatch) => {
    return {
        //获取视图权限信息
        getApi_authority: payload => {
            dispatch({
                type: "AddUser/getApi_authority"
            })
        }
    }
}
export default connect(mapToProps, mapDispatchProps)(Form.create()(addAttempt));

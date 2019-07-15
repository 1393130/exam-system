import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './AddUsers.scss'
import { Form, Icon, Input, Button, Checkbox, message, Select, Radio } from 'antd';
function RankSetView(props) {
    useEffect(() => {
        props.getView_authority()
    }, [])
    //表单验证
    const { getFieldDecorator } = props.form;
    //重置
    let handleReset = () => {
        props.form.resetFields();
    };
    const { Option } = Select;
    return (
        <div className={styles.AddUser_user_page}>
            <div className={styles.AddUser_user_title}>
                <Radio.Group value="rank">
                    <Radio.Button value="rank">给身份设置视图权限</Radio.Button>
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
                                    initialValue: "请选择视图权限id"
                                })(
                                    <Select style={{ width: 200 }}>
                                        {
                                            props.View_authority ? props.View_authority.map(item => {
                                                return <Option value={item.view_authority_id} key={item.view_authority_id}>{item.view_authority_text}</Option>
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
                            <Button onClick={handleReset}>重置</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

RankSetView.propTypes = {
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
        getView_authority: payload => {
            dispatch({
                type: "AddUser/getView_authority"
            })
        }
    }
}
export default connect(mapToProps, mapDispatchProps)(Form.create()(RankSetView));

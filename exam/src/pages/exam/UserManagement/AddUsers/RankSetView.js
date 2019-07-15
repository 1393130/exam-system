import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './AddUsers.scss'
import { Form, Icon, Input, Button, Checkbox, message, Select, Radio } from 'antd';
function RankSetView(props) {
    if (props.setIdentityViewInfo.code === 1) {
        message.success(props.setIdentityViewInfo.code.msg)
    }
    useEffect(() => {
        props.getView_authority()
        props.SelectRankId()
    }, [])
    //表单验证
    const { getFieldDecorator } = props.form;
    //重置
    let handleReset = () => {
        props.form.resetFields();
    };
    let handleSubmit = () => {
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                props.setIdentityView(values)
            }
        });
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
                    <Form className="login-form" onSubmit={handleSubmit}>
                        <div>
                            <Form.Item>
                                {getFieldDecorator('identity_id', {
                                    initialValue: "请选择身份id"
                                })(
                                    <Select style={{ width: 200 }}>
                                        {
                                            props.rankid.length > 0 ? props.rankid.map((item, index) => {
                                                return <Option value={item.identity_id} key={item.identity_id} >{item.identity_text}</Option>
                                            }) : null
                                        }
                                    </Select>,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('view_authority_id', {
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
                            <Button style={{ width: 120, marginRight: 20 }} htmlType="submit" type="button" className='ant-btn ant-btn-primary AddUser-btn'>
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
        },
        //选择身份id
        SelectRankId: payload => {
            dispatch({
                type: 'AddUser/SelectRankId',
            })
        },
        //给身份设定视图权限
        setIdentityView: payload => {
            dispatch({
                type: 'AddUser/setIdentityView',
                payload
            })
        }
    }
}
export default connect(mapToProps, mapDispatchProps)(Form.create()(RankSetView));

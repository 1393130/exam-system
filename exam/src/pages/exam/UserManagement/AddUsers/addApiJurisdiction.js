import React , {useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './AddUsers.scss'
import { Form, Icon, Input, Button , message , Select , Radio} from 'antd';
function addApiJurisdiction(props) {
    //表单验证
    const {getFieldDecorator} = props.form;
    //切换
    function callback(key) {
      console.log(key);
    }
    return (
        <div className={styles.AddUser_user_page}>
        <div className={styles.AddUser_user_title}>
            <Radio.Group>
                    <Radio.Button value="user">添加api接口权限</Radio.Button>
            </Radio.Group>
        </div>
        <div className={styles.AddUser_user_input}>
        <div className={styles.AddUser_user_form}>
            <Form className="login-form">
                <div>
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
                            placeholder="请输入api接口权限名称"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            validateFirst: 'onBlur',
                            rules: [
                            { required: true, message: 'Please input your Password!' },
                            { pattern: /^(?![^a-zA-Z]+$)(?!\D+$)/, message: '由数字字母组成' }
                            ],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入api接口权限url"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            validateFirst: 'onBlur',
                            rules: [
                            { required: true, message: 'Please input your Password!' },
                            { pattern: /^(?![^a-zA-Z]+$)(?!\D+$)/, message: '由数字字母组成' }
                            ],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入api接口权限方法"
                            />,
                        )}
                    </Form.Item>
                </div>
                <div className={styles.AddUser_user_Btn}>
                    <Button style={{ width : 120 ,marginRight: 20}} type="button" className='ant-btn ant-btn-primary AddUser-btn'>
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

addApiJurisdiction.propTypes = {
};

export default Form.create()(addApiJurisdiction);

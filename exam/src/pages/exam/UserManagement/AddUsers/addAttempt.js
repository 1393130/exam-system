import React , {useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './AddUsers.scss'
import { Form, Icon, Input, Button, Checkbox, message , Select , Radio} from 'antd';
function addAttempt(props) {
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
                    <Radio.Button value="rank">添加试图接口权限</Radio.Button>
            </Radio.Group>
        </div>
        <div className={styles.AddUser_user_input}>
        <div className={styles.AddUser_user_form}>
            <Form className="login-form">
                <div>
                    <Form.Item>
                        {getFieldDecorator('questions_type_id', {
                                initialValue: "请选择已有试图"
                            })(
                                <Select style={{ width: 200 }}>
                                {
                                    
                                }
                                </Select>,
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

addAttempt.propTypes = {
};

export default Form.create()(addAttempt);

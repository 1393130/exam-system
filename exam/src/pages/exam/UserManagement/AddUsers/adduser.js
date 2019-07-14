import React , {useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './AddUsers.scss'
import { Form, Icon, Input, Button, Checkbox, message , Select , Radio} from 'antd';
function AddUser(props) {
    //表单验证
    const {getFieldDecorator} = props.form;
    //切换
    function callback(key) {
      console.log(key);
    }
    //点击切换换内容
    let [flag , changeBtn] = useState(0)
    let handleBtnChange = () => {
        if(flag === 1) {
            changeBtn(0)
        } else if(flag === 0) {
            changeBtn(1)
        }
    }
    return (
        <div className={styles.AddUser_user_page}>
        <div className={styles.AddUser_user_title}>
            <Radio.Group value={flag} onChange={handleBtnChange}>
                    <Radio.Button value="user">添加用户</Radio.Button>
                    <Radio.Button value="update">更新用户</Radio.Button>
            </Radio.Group>
        </div>
        <div className={styles.AddUser_user_input}>
        <div className={styles.AddUser_user_form}>
            <Form className="login-form">
                <div>
                   { flag === 1 ? <Form.Item>
                        {getFieldDecorator('questions_type_id', {
                            initialValue: "请选择身份ID"
                        })(
                            <Select style={{ width: 200 }}>
                            {
                                
                            }
                            </Select>,
                        )}
                    </Form.Item> : null}
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
                            placeholder="Username"
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
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('questions_type_id', {
                            initialValue: "请选择身份ID"
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

AddUser.propTypes = {
};

export default Form.create()(AddUser);

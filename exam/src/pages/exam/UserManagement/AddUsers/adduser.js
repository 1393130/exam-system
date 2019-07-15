import React , {useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './AddUsers.scss'
import { Form, Icon, Input, Button, message , Select , Radio} from 'antd';
function AddUser(props) {
    if(props.update_User === 1) {
        message.success('更新成功')
    }
    //表单验证
    const {getFieldDecorator} = props.form;
    //切换
    function callback(key) {
      console.log(key);
    }
    //点击切换换内容
    let [flag , changeBtn] = useState('user')
    let handleBtnChange = (e) => {
        changeBtn(e.target.value)
    }
      //处理表单提交
    let handleSubmit = () => {
        props.form.validateFields((err, values) => {
        if (!err) {
            if(flag === 'user') {
                props.AddUser({user_name:values.username,user_pwd:values.password})
            } else if(flag === 'update') {
                console.log(values.user_id)
                props.UpdateUser({user_id:values.user_id,user_name:values.username,user_pwd:values.password})
            }
        }
     });
    };
    useEffect(() => {
       props.SelectRankId()
       props.userDisplay('/user/user')
    },[])
    const { Option } = Select
    //重置
    let handleReset = () => {
        props.form.resetFields();
    };
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
            <Form className="login-form" onSubmit={handleSubmit}>
                <div>
                   { flag === 'update' ? <Form.Item>
                        {getFieldDecorator('user_id', {
                            initialValue: "请选择身份ID"
                        })(
                            <Select style={{ width: 200 }}>
                                {
                                    props.userDisplayInfo.length > 0 ? props.userDisplayInfo.map((item, index) => {
                                        return <Option value={item.user_id} key={item.user_id} >{item.user_name}</Option>
                                    }) : null
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
                                    props.rankid.length > 0 ? props.rankid.map((item, index) => {
                                        return <Option value={item.identity_id} key={item.identity_id} >{item.identity_text}</Option>
                                    }) : null
                                }
                            </Select>,
                        )}
                    </Form.Item>
                </div>
                <div className={styles.AddUser_user_Btn}>
                    <Button style={{ width : 120 ,marginRight: 20}} htmlType="submit" type="button" className='ant-btn ant-btn-primary AddUser-btn'>
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

AddUser.propTypes = {
};
let mapStateProps = (state) => {
    return {
        ...state,
        ...state.AddUser,
        ...state.SelectRankId,
        ...state.userDisplay,
        ...state.UpdateUser
    }
}
let mapDispatchProps = (dispatch) => {
    return {
        //添加用户
        AddUser(payload) {
            dispatch({
                type:'AddUser/AddUser',
                payload
            })
        },
        //选择身份id
        SelectRankId() {
            dispatch({
                type:'AddUser/SelectRankId',
            })
        },
         //更新用户
         UpdateUser(payload) {
             console.log(payload)
            dispatch({
                type:'AddUser/UpdateUser',
                payload
            })
        },
         //展示用户数据
         userDisplay: payload => {
            dispatch({
                type: "userDisplay/userDisplay",
                payload
            })
        },
    }
}
export default connect(mapStateProps,mapDispatchProps)(Form.create()(AddUser));

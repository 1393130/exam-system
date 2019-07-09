import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './loginPage.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

function LoginPage(props) {
  console.log(props)
  useEffect(() => {
    props.login({ user_name: 'chenmanjie', user_pwd: 'Chenmanjie123!' });
  }, [])
  return (
    <div className="login_loginForm">
      <Form className="login-form">
        <div>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </div>
        
          <div className={styles.forget_pwd}>
            <Checkbox>记住密码</Checkbox>
            <a className="login-form-forgot" href="">
              忘记密码
             </a>
          </div>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        
      </Form>
    </div>
  );
}

LoginPage.propTypes = {
};
const mapToProps = state => {
  return { ...state, ...state.login }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: payload => {
      dispatch({
        type: "login/login",
        payload
      })
    }
  }
}
export default connect(mapToProps, mapDispatchToProps)(LoginPage);

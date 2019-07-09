import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './loginPage.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

function LoginPage(props) {
  console.log(props)
  if (props.isLogin) {
    props.history.push("/home")
  }
  useEffect(() => {
    // props.login({ user_name: 'chenmanjie', user_pwd: 'Chenmanjie123!' });
  }, []);
  let handleSubmit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        props.login({ user_name: values.username, user_pwd: values.password });
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <div className={styles.loginpage}>
      <div className="login_loginForm">
      <Form className="login-form" onSubmit={handleSubmit}>
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
export default connect(mapToProps, mapDispatchToProps)(Form.create()(LoginPage));

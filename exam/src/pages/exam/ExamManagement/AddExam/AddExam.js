import React from 'react';
import { connect } from 'dva';
import styles from './AddExam.scss'
import { Form, Input, Button } from 'antd';

function AddExam(props) {
    const { getFieldDecorator } = props.form;
    let handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    return (
        <div className={styles.AddExam}>
            <h2>添加考试</h2>
            <div className={styles.addexam_cont}>
                <Form onSubmit={handleSubmit} className="login-form">
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            placeholder="Username"
                        />,
                    )}
                </Form>
            </div>
        </div>
    );
}

AddExam.propTypes = {
};

export default connect()(AddExam);

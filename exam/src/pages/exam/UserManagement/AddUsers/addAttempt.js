import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './AddUsers.scss'
import { Form, Button , Select, Radio } from 'antd';
function addAttempt(props) {
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
        getView_authority: payload => {
            dispatch({
                type: "AddUser/getView_authority"
            })
        }
    }
}
export default connect(mapToProps, mapDispatchProps)(Form.create()(addAttempt));

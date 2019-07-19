import React  from 'react';
import { connect } from 'dva';
import styles from './AddUsers.scss'
import { Form, Input, Button , message  , Radio} from 'antd';
function addApiJurisdiction(props) {
    if(props.addAuthorityApiInfo.code===1){
        message.success(props.addAuthorityApiInfo.msg)
    }
    //表单验证
    const {getFieldDecorator} = props.form;
    let handleSubmit = () => {
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                props.addAuthorityApi(values)
            }
        });
    };
    //重置
    let handleReset = () => {
        props.form.resetFields();
    };
    return (
        <div className={styles.AddUser_user_page}>
        <div className={styles.AddUser_user_title}>
            <Radio.Group value='user'>
                    <Radio.Button value="user">添加api接口权限</Radio.Button>
            </Radio.Group>
        </div>
        <div className={styles.AddUser_user_input}>
        <div className={styles.AddUser_user_form}>
            <Form className="login-form"  onSubmit={handleSubmit}>
                <div>
                    <Form.Item>
                        {getFieldDecorator('api_authority_text', {
                            validateFirst: "onBlur",
                            rules: [
                            { required: true, message: '请输入api接口权限名称' },
                            { min: 6, max: 15, message: "6到15位组成" }
                            ],
                        })(
                            <Input
                            placeholder="请输入api接口权限名称"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('api_authority_url', {
                            validateFirst: 'onBlur',
                            rules: [
                            { required: true, message: '请输入api接口权限url' },
                            { pattern: /^(?![^a-zA-Z]+$)(?!\D+$)/, message: '由数字字母组成' }
                            ],
                        })(
                            <Input
                            placeholder="请输入api接口权限url"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('api_authority_method', {
                            validateFirst: 'onBlur',
                            rules: [
                            { required: true, message: '请输入api接口权限方法' }
                            ],
                        })(
                            <Input
                            placeholder="请输入api接口权限方法"
                            />,
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

addApiJurisdiction.propTypes = {
};
const mapToProps = state => {
    return {
        ...state,
        ...state.AddUser
    }
}
const mapDispatchProps = (dispatch) => {
    return {
        //添加api接口
        addAuthorityApi: payload => {
            dispatch({
                type: 'AddUser/addAuthorityApi',
                payload
            })
        }
    }
}
export default connect(mapToProps, mapDispatchProps)(Form.create()(addApiJurisdiction));

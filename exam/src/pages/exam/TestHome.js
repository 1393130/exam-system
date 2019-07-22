import React, { useState } from 'react';// eslint-disable-line
import styles from "./TestHome.scss"
import { connect } from 'dva';
import { Menu, Icon, Dropdown, Select, Modal, Button } from 'antd';
import {  Route, Switch, Redirect } from 'dva/router'
import { injectIntl } from 'react-intl';
import axios from 'axios';
//查看试题详情
// import QuestionDetail from './detail/QuestionDetail'
//编辑详情
// import editDetail from './detail/editDetail'
//试卷列表详情
// import ExamListDetail from './detail/ExamListDetail'
//批卷
// import BatchList from './MarkManagement/batchList'

import MenuList from '../../components/Menu'

//创建试卷
// import Add_Exam from './ExamManagement/AddExam/Add_Exam'
//学生批卷详情
// import BatchDetail from './detail/BatchDetail'

const { Option } = Select;

function TestHome(props) {
    if (props.login.myView.length === 0) {
        return null
    }
    const [visible, change_visible] = useState(false)
    let { user_name, user_id, avatar } = props.login.userInfo
    const [userImg, change_userImg] = useState('')
    let upload = () => {
        change_visible(true)
    }
    //下拉
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <span target="_blank" rel="noopener noreferrer" onClick={() => { upload() }}>
                    个人中心
            </span>
            </Menu.Item>
            <Menu.Item key="1">
                <span target="_blank" rel="noopener noreferrer">
                    我的班级
            </span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">
                <span target="_blank" rel="noopener noreferrer">
                    设置
            </span>
            </Menu.Item>
            <Menu.Item key="3">
                <span target="_blank" rel="noopener noreferrer">
                    退出登录
            </span>
            </Menu.Item>
        </Menu>
    );
    let handleOk = e => {
        if (userImg === "") {
            return
        }
        props.updateUser({ user_id: user_id, avatar: userImg })
        change_visible(false)
    };

    let handleCancel = e => {
        change_visible(false)
    };
    let loadImg = (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function () {
            axios.post('http://123.206.55.50:11000/upload_base64', { base64: this.result }).then(res => {
                // console.log(res)
                if (res.data.code === 1) {
                    // console.log(res.data.data.path)
                    change_userImg(res.data.data.path)
                }
            });
        }

    }
    return (
        <div className={styles.testHome}>
            <div className={styles.testHome_top}>
                <div className={styles.logo}><img alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" /></div>
                <div className={styles.userinfo}>
                    {/* <button onClick={()=>props.changeLocale(props.intl.locale=='en'?'zh':'en')}>{props.intl.locale=='en'?'英文':'中文'}</button> */}
                    <Select defaultValue="中文" style={{ width: 90 }}>
                        <Option value="中文" onClick={() => props.changeLocale('zh')}>中文</Option>
                        <Option value="英文" onClick={() => props.changeLocale('en')}>English</Option>
                    </Select>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="">
                            <em>{avatar ? <img alt="" src={avatar} /> : <img alt="" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4246834486,3428281355&fm=117&gp=0.jpg" />}</em><span>{user_name}</span>
                        </a>
                    </Dropdown>
                </div>
                <Modal
                    title="更新个人信息"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Button style={{ zIndex: 1, width: 120, height: 40, position: "relative" }}>
                        <Icon type="upload"></Icon>上传头像
                        <input type='file' onChange={(e) => { loadImg(e) }} style={{ width: '100%', height: '100%', opacity: 0, zIndex: 2, position: "absolute", top: 0, left: 0 }} />
                    </Button>
                </Modal>
            </div>
            <div className={styles.testHome_bottom}>
                <div className={styles.testHome_bottom_left}>
                    <MenuList></MenuList>
                </div>
                <div className={styles.testHome_bottom_right}>
                    <Switch>
                        <Redirect from="/home" exact to="/home/addquestion" />
                        {/* 配置用户拥有的路由 */}
                        {
                            props.myView.map(item => {
                                return item.children.map(value => {
                                    return <Route key={value.name} path={value.path} component={value.component}></Route>
                                })
                            })
                        }

                        {/* 配置用户禁止访问的路由 */}
                        {
                            props.forbiddenView.map(item => {
                                return <Redirect key={item.path} from={item.path} to="/403"></Redirect>
                            })
                        }

                        {/* 配置不存在的路由 */}
                        <Redirect to="/404"></Redirect>
                    </Switch>
                    {/* <Route path="/home/addquestion" component={AddQuestion}></Route>
                    <Route path="/home/classifyquestion" component={ClassifyQuestion}></Route>
                    <Route path="/home/checkquestion" component={CheckQuestion}></Route>
                    <Route path="/home/adduser" component={AddUser}></Route>
                    <Route path="/home/userdisplay" component={UserDisplay}></Route>
                    <Route path="/home/addexam" component={AddExam}></Route>
                    <Route path="/home/examlist" component={ExamList}></Route>
                    <Route path="/home/classmanage" component={ClassMange}></Route>
                    <Route path="/home/classroommanage" component={ClassroomManage}></Route>
                    <Route path="/home/studentmanage" component={StudentManage}></Route>
                    <Route path="/home/markmanage" component={MarkManage}></Route> */}

                    {/* <Route path="/home/QuestionDetail/:id" component={QuestionDetail}></Route>
                    <Route path="/home/editDetail/:id" component={editDetail}></Route>
                    <Route path="/home/ExamListDetail/:id" component={ExamListDetail}></Route>
                    <Route path="/home/batchList" component={BatchList}></Route>
                    <Route path="/home/creatExam" component={Add_Exam}></Route>
                    <Route path="/home/BatchDetail" component={BatchDetail}></Route> */}
                </div>
            </div>
        </div>
    );
}

TestHome.propTypes = {
};
const mapToProps = state => {
    return {
        ...state, ...state.login,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        //国际化
        changeLocale: payload => {
            dispatch({
                type: 'global/updateLocale',
                payload
            })
        },
        //更新用户数据
        updateUser: payload => {
            dispatch({
                type: 'login/upUser',
                payload
            })
        }
    }
}

export default injectIntl(connect(mapToProps, mapDispatchToProps)(TestHome));

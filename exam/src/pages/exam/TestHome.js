import React, { useEffect, useState } from 'react';
import styles from "./TestHome.scss"
import { connect } from 'dva';
import { Menu, Icon, Dropdown, Select, Modal } from 'antd';
import { Link, Route } from 'dva/router'
import { injectIntl } from 'react-intl';
//试题管理
import AddQuestion from './QuestionManagement/AddQuestions/AddQuestions'
import ClassifyQuestion from './QuestionManagement/ClassifyQuestions/ClassifyQuestions'
import CheckQuestion from './QuestionManagement/CheckQuestions/CheckQuestions'
//用户管理
import AddUser from './UserManagement/AddUsers/AddUsers'
import UserDisplay from './UserManagement/UserDisplay/UserDisplay'
//考试管理
import AddExam from './ExamManagement/AddExam/AddExam'
import ExamList from './ExamManagement/ExamLists/ExamLists'
//班级管理
import ClassMange from './ClassManagement/ClassManage/ClassManage'
import ClassroomManage from './ClassManagement/ClassroomManage/ClassroomManage'
import StudentManage from './ClassManagement/StudentManage/StudentManage'
//阅卷管理
import MarkManage from './MarkManagement/MarkManage'
//查看试题详情
import QuestionDetail from './detail/QuestionDetail'
//编辑详情
import editDetail from './detail/editDetail'
//试卷列表详情
import ExamListDetail from './detail/ExamListDetail'
//批卷
import BatchList from './MarkManagement/batchList'
import MenuList from '../../components/Menu'

//创建试卷
import Add_Exam from './ExamManagement/AddExam/Add_Exam'

const { SubMenu } = Menu;

const { Option } = Select;

function TestHome(props) {
    const [visible, change_visible] = useState(false)
    let { user_name } = props.login.userInfo
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
        change_visible(false)
    };

    let handleCancel = e => {
        change_visible(false)
    };
    return (
        <div className={styles.testHome}>
            <div className={styles.testHome_top}>
                <div className={styles.logo}><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" /></div>
                <div className={styles.userinfo}>
                    {/* <button onClick={()=>props.changeLocale(props.intl.locale=='en'?'zh':'en')}>{props.intl.locale=='en'?'英文':'中文'}</button> */}
                    <Select defaultValue="中文" style={{ width: 90 }}>
                        <Option value="中文" onClick={() => props.changeLocale('zh')}>中文</Option>
                        <Option value="英文" onClick={() => props.changeLocale('en')}>English</Option>
                    </Select>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            <em><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=829044612,3699393036&fm=27&gp=0.jpg" /></em><span>{user_name}</span>
                        </a>
                    </Dropdown>
                </div>
                <Modal
                    title="Basic Modal"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p><input type='file'/></p>
                    
                </Modal>
            </div>
            <div className={styles.testHome_bottom}>
                <div className={styles.testHome_bottom_left}>
                    <MenuList></MenuList>
                </div>
                <div className={styles.testHome_bottom_right}>
                    <Route path="/home/addquestion" component={AddQuestion}></Route>
                    <Route path="/home/classifyquestion" component={ClassifyQuestion}></Route>
                    <Route path="/home/checkquestion" component={CheckQuestion}></Route>
                    <Route path="/home/adduser" component={AddUser}></Route>
                    <Route path="/home/userdisplay" component={UserDisplay}></Route>
                    <Route path="/home/addexam" component={AddExam}></Route>
                    <Route path="/home/examlist" component={ExamList}></Route>
                    <Route path="/home/classmanage" component={ClassMange}></Route>
                    <Route path="/home/classroommanage" component={ClassroomManage}></Route>
                    <Route path="/home/studentmanage" component={StudentManage}></Route>
                    <Route path="/home/markmanage" component={MarkManage}></Route>
                    <Route path="/home/QuestionDetail/:id" component={QuestionDetail}></Route>
                    <Route path="/home/editDetail/:id" component={editDetail}></Route>
                    <Route path="/home/ExamListDetail/:id" component={ExamListDetail}></Route>
                    <Route path="/home/batchList" component={BatchList}></Route>
                    <Route path="/home/creatExam" component={Add_Exam}></Route>
                </div>
            </div>
        </div>
    );
}

TestHome.propTypes = {
};
const mapToProps = state => {
    return {
        ...state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeLocale: payload => {
            dispatch({
                type: 'global/updateLocale',
                payload
            })
        }
    }
}

export default injectIntl(connect(mapToProps, mapDispatchToProps)(TestHome));

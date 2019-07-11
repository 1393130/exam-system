import React from 'react';
import styles from "./TestHome.scss"
import { connect } from 'dva';
import { Menu, Icon, Dropdown } from 'antd';
import { Link, Route } from 'dva/router'
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

const { SubMenu } = Menu;

function TestHome() {
    //下拉
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    个人中心
            </a>
            </Menu.Item>
            <Menu.Item key="1">
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    我的班级
            </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    设置
            </a>
            </Menu.Item>
            <Menu.Item key="3">
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    退出登录
            </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className={styles.testHome}>
            <div className={styles.testHome_top}>
                <div className={styles.logo}><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" /></div>
                <div className={styles.userinfo}>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            <em><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=829044612,3699393036&fm=27&gp=0.jpg" /></em><span>zhangxin</span>
                        </a>
                    </Dropdown>
                </div>
            </div>
            <div className={styles.testHome_bottom}>
                <div className={styles.testHome_bottom_left}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                    // inlineCollapsed={this.state.collapsed}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="sliders" />
                                    <span>试题管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="1"><Link to="/home/addquestion">添加试题</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/home/classifyquestion">试题分类</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/home/checkquestion">查看试题</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="user" />
                                    <span>用户管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="4"><Link to="/home/adduser">添加用户</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/home/userdisplay">用户展示</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>考试管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="6"><Link to="/home/addexam">添加考试</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/home/examlist">试卷列表</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                                    <Icon type="team" />
                                    <span>班级管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="8"><Link to="/home/classmanage">班级管理</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/home/classroommanage">教室管理</Link></Menu.Item>
                            <Menu.Item key="10"><Link to="/home/studentmanage">学生管理</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>阅卷管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="11"><Link to="/home/markmanage">待批管理</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
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
                    <Route path="/home/QuestionDetail" component={QuestionDetail}></Route>
                    
                </div>
            </div>
        </div>
    );
}

TestHome.propTypes = {
};

export default connect()(TestHome);

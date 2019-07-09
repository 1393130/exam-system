import React from 'react';
import styles from "./TestHome.scss"
import { connect } from 'dva';
import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;

function TestHome() {
    return (
        <div className={styles.testHome}>
            <div className={styles.testHome_top}></div>
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
                                    <Icon type="mail" />
                                    <span>试题管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="1">添加试题</Menu.Item>
                            <Menu.Item key="2">试题分类</Menu.Item>
                            <Menu.Item key="3">查看试题</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>用户管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="4">添加用户</Menu.Item>
                            <Menu.Item key="5">用户展示</Menu.Item>
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
                            <Menu.Item key="6">添加考试</Menu.Item>
                            <Menu.Item key="7">试卷列表</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>班级管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="8">班级管理</Menu.Item>
                            <Menu.Item key="9">教室管理</Menu.Item>
                            <Menu.Item key="10">学生管理</Menu.Item>
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
                            <Menu.Item key="11">待批管理</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className={styles.testHome_bottom_right}>
                    
                </div>
            </div>
        </div>
    );
}

TestHome.propTypes = {
};

export default connect()(TestHome);

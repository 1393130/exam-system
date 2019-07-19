import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink, Link, Route } from 'dva/router';
import { injectIntl } from 'react-intl';

const { SubMenu } = Menu;

const MenuList = props => {
    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
        >
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <Icon type="sliders" />
                        <span>{props.intl.formatMessage({id: 'router.questions'})}</span>
                    </span>
                }
            >
                <Menu.Item key="1"><Link to="/home/addquestion">{props.intl.formatMessage({id: 'router.questions.add'})}</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/home/classifyquestion">{props.intl.formatMessage({id: 'router.questions.type'})}</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/home/checkquestion">{props.intl.formatMessage({id: 'router.questions.view'})}</Link></Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>
                        <Icon type="user" />
                        <span>{props.intl.formatMessage({id: 'router.UserManage'})}</span>
                    </span>
                }
            >
                <Menu.Item key="4"><Link to="/home/adduser">{props.intl.formatMessage({id: 'router.UserManage.adduser'})}</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/home/userdisplay">{props.intl.formatMessage({id: 'router.UserManage.userdisplay'})}</Link></Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub3"
                title={
                    <span>
                        <Icon type="mail" />
                        <span>{props.intl.formatMessage({id: 'router.ExamManage'})}</span>
                    </span>
                }
            >
                <Menu.Item key="6"><Link to="/home/addexam">{props.intl.formatMessage({id: 'router.ExamManage.addexam'})}</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/home/examlist">{props.intl.formatMessage({id: 'router.ExamManage.examlist'})}</Link></Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub4"
                title={
                    <span>
                        <Icon type="team" />
                        <span>{props.intl.formatMessage({id: 'router.ClassManage'})}</span>
                    </span>
                }
            >
                <Menu.Item key="8"><Link to="/home/classmanage">{props.intl.formatMessage({id: 'router.ClassManage.classmanage'})}</Link></Menu.Item>
                <Menu.Item key="9"><Link to="/home/classroommanage">{props.intl.formatMessage({id: 'router.ClassManage.classroommanage'})}</Link></Menu.Item>
                <Menu.Item key="10"><Link to="/home/studentmanage">{props.intl.formatMessage({id: 'router.ClassManage.studentmanage'})}</Link></Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub5"
                title={
                    <span>
                        <Icon type="mail" />
                        <span>{props.intl.formatMessage({id: 'router.MarkManage'})}</span>
                    </span>
                }
            >
                <Menu.Item key="11"><Link to="/home/markmanage">{props.intl.formatMessage({id: 'router.MarkManage.markmanage'})}</Link></Menu.Item>
            </SubMenu>
        </Menu>
    );
};

export default injectIntl(MenuList);
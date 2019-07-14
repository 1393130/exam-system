import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './UserDisplay.scss'
import { Button, Radio, Icon, Table, Divider, Tag } from 'antd';

function UserDisplay(props) {
    const { Column, ColumnGroup } = Table;
    const userClassify = [
        {
            tit: "用户数据",
            port: "/user/user"
        }, {
            tit: "身份数据",
            port: "/user/identity"
        }, {
            tit: "api接口权限",
            port: "/user/api_authority"
        }, {
            tit: "身份和api接口关系",
            port: "/user/identity_api_authority_relation"
        }, {
            tit: "视图接口权限",
            port: "/user/view_authority"
        }, {
            tit: "身份和视图权限关系",
            port: "/user/identity_view_authority_relation"
        },
    ]
    const [size, changeSize] = useState(0)
    const [title, change_title] = useState("用户数据")
    //默认展示用户数据
    useEffect(() => {
        props.userDisplay(userClassify[0].port)
    }, [])
    //tab切换
    let handleSizeChange = e => {
        changeSize(e.target.value)
        change_title(userClassify[e.target.value].tit)
        props.userDisplay(userClassify[e.target.value].port)
    }
    return (
        <div className={styles.userdisplay}>
            <h2>用户展示</h2>
            <div className={styles.userClassify}>
                <Radio.Group value={size} onChange={handleSizeChange}>
                    {
                        userClassify.map((item, index) => {
                            return <Radio.Button value={index} key={index}>{item.tit}</Radio.Button>
                        })
                    }
                </Radio.Group>
            </div>
            <h1>{title}</h1>
            <div className={styles.table_cont}>
                {size === 0 ? <Table dataSource={props.userDisplayInfo} rowKey='user_id'>
                    <Column title="用户名" dataIndex="user_name" rowKey="user_name" />
                    <Column title="密码" dataIndex="user_pwd" rowKey="user_pwd" />
                    <Column title="Age" dataIndex="user_id" rowKey="user_id" />
                </Table> : null}
                {size === 1 ? <Table dataSource={props.userDisplayInfo} rowKey='identity_id'>
                    <Column title="身份名称" dataIndex="identity_text" rowKey="identity_text" />
                </Table> : null}
                {size === 2 ? <Table dataSource={props.userDisplayInfo} rowKey='api_authority_id'>
                    <Column title="api权限名称" dataIndex="api_authority_text" rowKey="api_authority_text" />
                    <Column title="api权限url" dataIndex="api_authority_url" rowKey="api_authority_url" />
                    <Column title="api权限方法" dataIndex="api_authority_method" rowKey="api_authority_method" />
                </Table> : null}
                {size === 3 ? <Table dataSource={props.userDisplayInfo} rowKey='identity_api_authority_relation_id'>
                    <Column title="身份名称" dataIndex="identity_text" rowKey="identity_text" />
                    <Column title="api权限名称" dataIndex="api_authority_text" rowKey="api_authority_text" />
                    <Column title="api权限url" dataIndex="api_authority_url" rowKey="api_authority_url" />
                    <Column title="api权限方法" dataIndex="api_authority_method" rowKey="api_authority_method" />
                </Table> : null}
                {size === 4 ? <Table dataSource={props.userDisplayInfo} rowKey='view_authority_id'>
                    <Column title="视图权限名称" dataIndex="view_authority_text" rowKey="view_authority_text" />
                    <Column title="视图id" dataIndex="view_id" rowKey="view_id" />
                </Table> : null}
                {size === 5 ? <Table dataSource={props.userDisplayInfo} rowKey='identity_view_authority_relation_id'>
                    <Column title="身份" dataIndex="identity_text" rowKey="identity_text" />
                    <Column title="视图名称" dataIndex="view_authority_text" rowKey="view_authority_text" />
                    <Column title="视图id" dataIndex="view_id" rowKey="view_id" />
                </Table> : null}
            </div>
        </div>
    );
}

UserDisplay.propTypes = {
};

const mapToProps = state => {
    return { ...state, ...state.userDisplay }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //获取数据
        userDisplay: payload => {
            dispatch({
                type: "userDisplay/userDisplay",
                payload
            })
        },
    }
}

export default connect(mapToProps, mapDispatchToProps)(UserDisplay);

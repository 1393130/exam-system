import React from 'react';
import { connect } from 'dva';
import style from './ClassroomManage.scss'
import { Button, Modal, Form, Input, Radio, Table, Divider, Tag, Spin, message, Select } from 'antd';

function ClassroomManage(props) {
    const { Column, ColumnGroup } = Table;
    const { getFieldDecorator } = props.form;
    const { Option } = Select;
    let data = [{
        title: "123"
    }]
    return (
        <div className={style.question_box}>
            {props.global ? <div className={style.loading}><Spin /></div> : null}
            <header className={style.question_header}>
                <h2>教室管理</h2>
            </header>
            <section className={style.question_main}>
                <div className={style.question_main_Add}>
                    <div>
                        <Button type="primary" style={{ width: 200, height: 50, background: '#446DFF', fontSize: 18 }} >
                            + 添加班级
                        </Button>
                    </div>
                </div>
                <div className={style.question_main_list}>
                    <Table dataSource={data} rowKey="grade_id" style={{ fontSize: 25 }}>
                        <Column title="教室号" dataIndex="room_text" rowKey="room_id" />
                        <Column
                            title="操作"
                            key="action"
                            render={(text, record) => (
                                <span>
                                    <a href="javascript:;" onClick={() => { }}>删除</a>
                                </span>
                            )}
                        />
                    </Table>
                </div>
            </section>
        </div>
    );
}

ClassroomManage.propTypes = {
};

export default connect()(Form.create()(ClassroomManage));

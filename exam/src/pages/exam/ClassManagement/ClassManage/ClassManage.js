import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import style from './ClassManage.scss'
import { Button, Modal, Form, Input, Radio, Table, Divider, Tag, Spin, message } from 'antd';

function ClassManage(props) {
    const { Column, ColumnGroup } = Table;
    //改变的弹框的显示隐藏
    const [visible, changeVisible] = useState(false);
    const [confirmLoading, changeConfir] = useState(false);
    //设置默认onchange的值
    const [onValue, onChangeValue] = useState('')
    //点击添加类型的按钮
    let showModal = () => {
        changeVisible(true);
    };
    //点击弹框的取消按钮
    let handleCancel = () => {
        changeVisible(false);
    };
    let handleOk = () => {
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
      const { getFieldDecorator } = props.form;
      let data=[
          {
              'title':'123'
          }
      ]
    return (
        <div className={style.question_box}>
            {props.global ? <div className={style.loading}><Spin /></div> : null}
            <header className={style.question_header}>
                <h2>班级管理</h2>
            </header>
            <section className={style.question_main}>
                <div className={style.question_main_Add}>
                    <div>
                        <Button type="primary" onClick={showModal} style={{width:200,height:50,background:'#446DFF',fontSize:18}} >
                            + 添加班级
                        </Button>
                        <Modal
                            visible={visible}
                            title="添加考试类型"
                            onCancel={() => handleCancel(false)}
                            onOk={() => handleOk()}
                        >
                            <Form onSubmit={handleOk}>
                                <Form.Item label="班级名：">
                                    {getFieldDecorator('onValue', {
                                        rules: [{ required: true, message: '请输入试题类型!' }],
                                    })(
                                        <Input
                                            placeholder="请输入类型名称"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="教室号：">
                                    {getFieldDecorator('onValue', {
                                        rules: [{ required: true, message: '请输入试题类型!' }],
                                    })(
                                        <Input
                                            placeholder="请输入类型名称"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="课程名：">
                                    {getFieldDecorator('onValue', {
                                        rules: [{ required: true, message: '请输入试题类型!' }],
                                    })(
                                        <Input
                                            placeholder="请输入类型名称"
                                        />,
                                    )}
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                </div>
                <div className={style.question_main_list}>
                    <Table dataSource={data} rowKey="questions_type_id">
                        <Column title="类型ID" dataIndex='questions_type_id' rowKey="questions_type_id" />
                        <Column title="类型名称" dataIndex="questions_type_text" rowKey="questions_type_id" />
                        <Column title="操作" dataIndex="address" rowKey="questions_type_id" />
                    </Table>
                </div>
            </section>
        </div>
    );
}

ClassManage.propTypes = {
};

export default connect()(Form.create()(ClassManage));

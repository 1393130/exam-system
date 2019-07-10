import React , {useState,useEffect} from 'react';
import { connect } from 'dva';
import style from './ClassifyQuestions.css'

import { Button, Modal, Form, Input, Radio , Table, Divider, Tag} from 'antd';
function ClassifyQuestion(props) {
  const { onCancel, onCreate } = props;
  console.log(props)
  const { getFieldDecorator } = props.form;
  const CollectionCreateForm = Form.create({ name: 'form_in_modal' })
  useEffect(() => {
     props.getClassify()
  },[])

  const [visible,changeVisible]= useState(false);
  let showModal = () => {
    changeVisible(true);
  };
  let handleCancel = () => {
    changeVisible(true);
  };
  let formRef ;
  let handleCreate = () => {
    const { form } = formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      form.resetFields();
      changeVisible(false);
    });
  };

  let saveFormRef = (formRef) => {
      formRef = formRef;
  };
  //列表
  const columns = [
    {
      title: '类型ID',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: '类型名称',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      ),
    },
  ];
  //列表内容
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <div className={style.question_box}>
        <header className={style.question_header}>
            <h2>试题分类</h2>
        </header>
        <section className={style.question_main}>
            <div className={style.question_main_Add}>
            <div>
              <Button type="primary" onClick={showModal}>
                + 添加类型
              </Button>
              <CollectionCreateForm
                wrappedComponentRef={saveFormRef}
                visible={visible}
                onCancel={handleCancel}
                onCreate={handleCreate}
              />
            </div>
            <Modal
              visible={visible}
              title="Create a new collection"
              okText="Create"
              onCancel={onCancel}
              onOk={onCreate}
            >
                <Form layout="vertical">
                  <Form.Item label="Title">
                    {getFieldDecorator('title', {
                      rules: [{ required: true, message: 'Please input the title of collection!' }],
                    })(<Input />)}
                  </Form.Item>
                  <Form.Item label="Description">
                    {getFieldDecorator('description')(<Input type="textarea" />)}
                  </Form.Item>
                  <Form.Item className="collection-create-form_last-form-item">
                    {getFieldDecorator('modifier', {
                      initialValue: 'public',
                    })(
                      <Radio.Group>
                        <Radio value="public">Public</Radio>
                        <Radio value="private">Private</Radio>
                      </Radio.Group>,
                    )}
                  </Form.Item>
                </Form>
            </Modal>
            </div>
            <div className={style.question_main_list}>
                <Table columns={columns} dataSource={data} />
            </div>
        </section>
    </div>  
  );
}

ClassifyQuestion.propTypes = {
};
let mapStateProps = (state) => {
  return {...state,...state.ClassifyQuestions}
}
let mapDispatchProps = (dispatch) => {
  return {
      getClassify() {
        dispatch({
          type:'getclassify/getclassify',
        })
      }
  }
}
export default connect(mapStateProps,mapDispatchProps)(Form.create()(ClassifyQuestion));

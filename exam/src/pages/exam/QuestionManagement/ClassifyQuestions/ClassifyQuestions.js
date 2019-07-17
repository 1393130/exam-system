import React , {useState,useEffect} from 'react';
import { connect } from 'dva';
import style from './ClassifyQuestions.scss'
import { Button, Modal, Form, Input, Radio , Table, Divider, Tag , Spin, message} from 'antd';
import {injectIntl} from 'react-intl';

function ClassifyQuestion(props) {
  const { Column, ColumnGroup } = Table
  useEffect(() => {
     props.getClassify()
  },[])

  //获取的数据
  let {list} = props.getclassify
  //改变的弹框的显示隐藏
  const [visible,changeVisible]= useState(false);
  const [confirmLoading,changeConfir]= useState(false);
  //设置默认onchange的值
  const [onValue , onChangeValue] = useState('')
  //点击添加类型的按钮
  let showModal = () => {
    changeVisible(true);
  };
  //点击弹框的取消按钮
  let handleCancel = () => {
    changeVisible(false);
  };
  //点击弹框的确定按钮
  let handleOk = () => {
    props.form.validateFields((err, values) => {
      console.log('err...', err);
      if (!err) {
        console.log('Received values of form: ', values);
        props.AddClassify({text:values.onValue,sort:list.length + 1})
        handleCancel()
      }else{
        message.error(err.types.errors[0].message);
      }
    });
  };
  //渲染列表内容
  const data = list
  const { getFieldDecorator } = props.form;
  return (
    <div className={style.question_box}>
      {props.global?<div className={style.loading}><Spin/></div>: null}
        <header className={style.question_header}>
            <h2>{props.intl.formatMessage({id: 'router.questions.type'})}</h2>
        </header>
        <section className={style.question_main}>
            <div className={style.question_main_Add}>
            <div>
            <Button type="primary" onClick={showModal}>
                + 添加类型
            </Button>
            <Modal
                visible={visible}
                title="添加考试类型"
                onCancel={()=>handleCancel(false)}
                onOk={()=>handleOk()}
                >
                <Form onSubmit={handleOk}>
                  <Form.Item>
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

ClassifyQuestion.propTypes = {
};
let mapStateProps = (state) => {
  return {...state,
    ...state.ClassifyQuestions,
    global: state.loading.global
  }
}
let mapDispatchProps = (dispatch) => {
  return {
      //试题分类里面的渲染数据
      getClassify() {
        dispatch({
          type:'getclassify/getclassify',
        })
      },
      //试题分类里面的添加类型试题 paylaod 传过来的是 text  sort
      AddClassify(payload) {
        console.log(payload)
        dispatch({
          type:'AddClassify/AddClassify',
          payload
        })
      }
  }
}
export default injectIntl(connect(mapStateProps,mapDispatchProps)(Form.create()(ClassifyQuestion)));

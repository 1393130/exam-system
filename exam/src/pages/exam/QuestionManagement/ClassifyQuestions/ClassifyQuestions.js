import React , {useState,useEffect} from 'react';
import { connect } from 'dva';
import style from './ClassifyQuestions.css'

import { Button, Modal, Form, Input, Radio , Table, Divider, Tag } from 'antd';
function ClassifyQuestion(props) {
  // state = {
  //   ModalText: 'Content of the modal',
  //   visible: false,
  //   confirmLoading: false,
  // };
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
    changeConfir(true)
    setTimeout(() => {
      changeConfir(true);
      changeVisible(false);
      props.AddClassify({text:onValue,sort:list.length + 1})
    }, 2000);
  };
  //创建类型的input输入框
  // let onChange = e => {
  //   console.log(e.target.value);
  // };
  //列表内容
  const data = list
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
              <Modal
                title="创建新类型"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                <p><Input placeholder="input with clear icon" value={onValue} allowClear onChange={(e) => {onChangeValue(e.target.value)}} /></p>
              </Modal>
            </div>
            </div>
            <div className={style.question_main_list}>
            <Table dataSource={data}>
              <Column title="类型ID" dataIndex='questions_type_id' key="questions_type_id" />
              <Column title="类型名称" dataIndex="questions_type_text" key="questions_type_text" />
              <Column title="操作" dataIndex="address" key="address" />
            </Table> 
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
      },
      AddClassify(payload) {
        console.log(payload)
        dispatch({
          type:'AddClassify/AddClassify',
          payload
        })
      }
  }
}
export default connect(mapStateProps,mapDispatchProps)(Form.create()(ClassifyQuestion));

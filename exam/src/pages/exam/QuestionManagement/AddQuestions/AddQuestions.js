import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import Editor from 'for-editor'
import styles from './AddQuestions.scss'
import { Form, Input, Select, Button, Modal,message } from 'antd';
import {injectIntl} from 'react-intl';

function AddQuestion(props) {
  useEffect(()=>{
    if(props.addInfo===1){
      message.success('添加成功')
    }
  },[props.addInfo])
  useEffect(() => {
    props.getExamType()//获取考试类型
    props.getSubject()//获取课程类型
    props.getTopicType()//获取题目类型
    props.getUserInfo()//获取用户信息
  }, [])
  //控制弹框
  const [visible, change_visible] = useState(false);
  let showModal = () => {
    change_visible(true)
  };
  let handleOk = e => {
    change_visible(false)
    handleSubmit()
  };

  let handleCancel = e => {
    change_visible(false)
  };
  //从form中校验
  const { getFieldDecorator } = props.form;
  //处理表单提交
  let handleSubmit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        let examID = props.examType.find(item => item.exam_name === values.exam_id).exam_id;
        let subjectID = props.subjectType.find(item => item.subject_text === values.subject_id).subject_id;
        if(values.questions_type_id==="简答题"){
          values.questions_type_id="774318-730z8m"
        }
        values.exam_id = examID;
        values.subject_id = subjectID;
        values.user_id = props.userInfo.user_id;
        let obj=Object.values(values);
        if(obj.includes(undefined)){
          message.error('参数不完整')
        }else{
          props.addQuestion(values)
        }
      }
    });
  };
  const { Option } = Select;
  return (
    <div className={styles.addquestion}>
      <h2>{props.intl.formatMessage({id: 'router.questions.add'})}</h2>
      <section className={styles.addquestion_cont}>
        <Form onSubmit={handleSubmit}>
          <h4>题目信息</h4>
          <div className={styles.question_stem}>
            <h4>题干</h4>
            <Form.Item>
              {getFieldDecorator('title', {
              })(
                <Input
                  placeholder="请输入题目标题，不超过20个字"
                />,
              )}
            </Form.Item>
          </div>
          <div className={styles.topic_theme}>
            <h4>题目主题</h4>
            <Form.Item>
              {getFieldDecorator('questions_stem', {
              })(
                <Editor style={{ height: 330 }}></Editor>,
              )}
            </Form.Item>
          </div>
          <div className={styles.test_type}>
            <h4>请选择考试类型：</h4>
            <Form.Item>
              {getFieldDecorator('exam_id', {
                initialValue: "周考1"
              })(
                <Select style={{ width: 200 }}>
                  {
                    props.examType && props.examType.map((item, index) => {
                      return <Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>
                    })
                  }
                </Select>,
              )}
            </Form.Item>
          </div>
          <div className={styles.test_type}>
            <h4>请选择课程类型：</h4>
            <Form.Item>
              {getFieldDecorator('subject_id', {
                initialValue: "javaScript上"
              })(
                <Select style={{ width: 200 }}>
                  {
                    props.subjectType && props.subjectType.map((item, index) => {
                      return <Option value={item.subject_text} key={item.subject_id}>{item.subject_text}</Option>
                    })
                  }
                </Select>,
              )}
            </Form.Item>
          </div>
          <div className={styles.test_type}>
            <h4>请选择题目类型：</h4>
            <Form.Item>
              {getFieldDecorator('questions_type_id', {
                initialValue: "简答题"
              })(
                <Select style={{ width: 200 }}>
                  {
                    props.TopicType && props.TopicType.map((item, index) => {
                      return <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
                    })
                  }
                </Select>,
              )}
            </Form.Item>
          </div>
          <div className={styles.topic_theme}>
            <h4>答案信息</h4>
            <Form.Item>
              {getFieldDecorator('questions_answer', {
              })(
                <Editor style={{ height: 330 }}></Editor>,
              )}
            </Form.Item>
          </div>
          {/* <Button type="primary" size="large" htmlType="submit">
            提交
        </Button> */}
          <Button type="primary" onClick={showModal} size="large">
            提示
        </Button>
          <Modal
            title="添加试题"
            visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          >
            <h2>确认添加吗？</h2>
          </Modal>
        </Form>

      </section>
    </div>
  );
}

AddQuestion.propTypes = {
};

const mapToProps = state => {
  return { ...state, ...state.getExamType, ...state.getSubject, ...state.getTopicType, ...state.getUserInfo,...state.addQuestion }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //获取考试类型
    getExamType: () => {
      dispatch({
        type: "getExamType/getExamType"
      })
    },
    //获取课程类型
    getSubject: () => {
      dispatch({
        type: "getSubject/getSubject"
      })
    },
    //获取题目类型
    getTopicType: () => {
      dispatch({
        type: "getTopicType/getTopicType"
      })
    },
    //获取用户信息
    getUserInfo: () => {
      dispatch({
        type: "getUserInfo/getUserInfo"
      })
    },
    addQuestion:payload=>{
      dispatch({
        type: "addQuestion/addQuestion",
        payload
      })
    }
  }
}
export default injectIntl(connect(mapToProps, mapDispatchToProps)(Form.create()(AddQuestion)));

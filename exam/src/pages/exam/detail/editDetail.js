import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import Editor from 'for-editor'
import styles from './editDetail.scss'
import { Form, Input, Select, Button, Modal, message } from 'antd';

function editDetail(props) {
  if (props.editQuest == 1) {
    message.success('修改成功')
  }
  useEffect(() => {
    props.getExamType()//获取考试类型
    props.getSubject()//获取课程类型
    props.getTopicType()//获取题目类型
    props.getUserInfo()//获取用户信息
    props.getCheckQuestion({ 'questions_id': props.match.params.id.slice(1).split('=')[1] })//获取试题信息
  }, [])
  let { title, user_name, questions_type_text, subject_text, exam_name, questions_stem, questions_answer } = props.filterQuestion[0]
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
        if (values.questions_type_id === "简答题") {
          values.questions_type_id = "774318-730z8m"
        }
        values.exam_id = examID;
        values.subject_id = subjectID;
        values.user_id = props.userInfo.user_id;
        values.questions_id = props.match.params.id.slice(1).split('=')[1];
        let obj = Object.values(values);
        if (obj.includes(undefined)) {
          message.error('参数不完整')
        } else {
          props.editQuestion(values)
        }
      }
    });
  };
  const { Option } = Select;

  return (
    props.filterQuestion.length > 0 ? <div className={styles.addquestion}>
      <h2>编辑试题</h2>{props.filterQuestion[0].title}
      <section className={styles.addquestion_cont}>
        <Form onSubmit={handleSubmit}>
          <h4>题目信息</h4>
          <div className={styles.question_stem}>
            <h4>题干</h4>
            <Form.Item>
              {getFieldDecorator('title', {
                initialValue: props.filterQuestion[0].title
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
                initialValue: props.filterQuestion[0].questions_stem
              })(
                <Editor style={{ height: 330 }}></Editor>,
              )}
            </Form.Item>
          </div>
          <div className={styles.test_type}>
            <h4>请选择考试类型：</h4>
            <Form.Item>
              {getFieldDecorator('exam_id', {
                initialValue: props.filterQuestion[0].exam_name
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
                initialValue: props.filterQuestion[0].subject_text
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
                initialValue: props.filterQuestion[0].questions_type_text
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
                initialValue: props.filterQuestion[0].questions_answer
              })(
                <Editor style={{ height: 330 }}></Editor>,
              )}
            </Form.Item>
          </div>
          <Button type="primary" onClick={showModal} type="primary" size="large">
            提示
        </Button>
          <Modal
            title="添加试题"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <h2>确认要修改吗？</h2>
          </Modal>
        </Form>

      </section>
    </div> : <div>数据正在请求</div>
  );
}

editDetail.propTypes = {
};

const mapToProps = state => {
  return { ...state, ...state.getExamType, ...state.getSubject, ...state.getTopicType, ...state.getUserInfo, ...state.getCheckQuestion, ...state.editQuestion }
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
    //查询数据
    getCheckQuestion: (payload) => {
      console.log(payload, "........")
      dispatch({
        type: 'getCheckQuestion/getCheckQuestion',
        payload
      })
    },
    editQuestion: (payload) => {
      dispatch({
        type: 'editQuestion/editQuestion',
        payload
      })
    }
  }
}
export default connect(mapToProps, mapDispatchToProps)(Form.create()(editDetail));

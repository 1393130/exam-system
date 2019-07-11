import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import Editor from 'for-editor'
import styles from './AddQuestions.scss'
import { Input, Select, Button } from 'antd';

function AddQuestion(props) {
  console.log(props)
  useEffect(() => {
    props.getExamType()//获取考试类型
    props.getSubject()//获取课程类型
    props.getTopicType()//获取题目类型
  }, [])
  //题干内容
  const [questions_stem,change_questions_stem]=useState('')
  let stemIpt=(e)=>{
    change_questions_stem(e.target.value)
  }
  //考试类型
  // const [questions_stem,change_questions_stem]=useState('')
  let testTypeId=(key)=>{
    console.log(key)
  }
  const { Option } = Select;
  return (
    <div className={styles.addquestion}>
      <h2>添加试题</h2>
      <section className={styles.addquestion_cont}>
        <h4>题目信息</h4>
        <div className={styles.question_stem}>
          <h4>题干</h4>
          <Input placeholder="请输入题目标题，不超过20个字" onChange={e=>stemIpt(e)}/>
        </div>
        <div className={styles.topic_theme}>
          <h4>题目主题</h4>
          <Editor style={{ height: 330 }}></Editor>
        </div>
        <div className={styles.test_type}>
          <h4>请选择考试类型：</h4>
          <Select defaultValue="请选择考试类型" style={{ width: 200 }} onChange={testTypeId}>
            {
              props.examType && props.examType.map((item, index) => {
                return <Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>
              })
            }
          </Select>
        </div>
        <div className={styles.test_type}>
          <h4>请选择课程类型：</h4>
          <Select defaultValue="javaScript上" style={{ width: 200 }}>
            {
              props.subjectType && props.subjectType.map((item, index) => {
                return <Option value={item.subject_text} key={item.subject_id}>{item.subject_text}</Option>
              })
            }
          </Select>
        </div>
        <div className={styles.test_type}>
          <h4>请选择题目类型：</h4>
          <Select defaultValue="简答题" style={{ width: 200 }}>
            {
              props.TopicType && props.TopicType.map((item, index) => {
                return <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
              })
            }
          </Select>
        </div>
        <div className={styles.topic_theme}>
          <h4>答案信息</h4>
          <Editor style={{ height: 330 }}></Editor>
        </div>
        <Button type="primary" size="large">
          提交
        </Button>
      </section>
    </div>
  );
}

AddQuestion.propTypes = {
};

const mapToProps = state => {
  return { ...state, ...state.getExamType, ...state.getSubject, ...state.getTopicType }
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
    }
  }
}
export default connect(mapToProps, mapDispatchToProps)(AddQuestion);

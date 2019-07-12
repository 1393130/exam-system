import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './CheckQuestions.scss';
import { Tag, Button, Select, Form } from 'antd';


function CheckQuestion(props) {
  const { CheckableTag } = Tag;
  const [selectedTags, changeselectedTags] = useState([])
  const [subjectID, changeSubjectID] = useState('')

  //判断全选
  useEffect(() => {
    props.getExamType()//获取考试类型
    props.getTopicType()//获取题目类型
    props.getSubject()//获取课程类型
    props.AllCheckQuestion()//获取所有试题
  }, [])
  // 选择分类
  let handleChange = (tag, checked) => {
    if (tag === "All") {

    } else {
      let subID = props.subjectType.find(item => item.subject_text === tag.subject_text).subject_id
      changeselectedTags([tag])
      changeSubjectID(subID)
    }

  }

  //处理表单提交
  let handleSubmit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        if (values.exam_id !== '') {
          let examID = props.examType.find(item => item.exam_name === values.exam_id).exam_id;
          values.exam_id = examID
        }
        let obj = {
          ...values,
          subject_id: subjectID
        }
        for (let i in obj) {
          if (obj[i] === "") {
            delete obj[i]
          }
        }
        props.getCheckQuestion(obj)
      }
    });
  };
  //从form中校验
  const { getFieldDecorator } = props.form;

  const { Option } = Select;
  //点击跳考试详情
  let ToQuestionDetail = (item) => {
    props.history.push({ pathname: `/home/QuestionDetail/?id=${item.questions_id}` })
  }
  //点击跳转编辑页
  let CompileDetail = (item) => {
    console.log(item)
    props.history.push({ pathname: `/home/editDetail/?id=${item.questions_id}` })
  }
  let arr = props.AllQuestions
  if (props.filterQuestion) {
    arr = props.filterQuestion
  }
  return (
    <div className={styles.checkquest}>
      <h2>查看试题</h2>
      <section className={styles.checkquest_cont}>
        <Form onSubmit={handleSubmit}>
          <div className={styles.classify_quest}>
            <div>
              <h6 style={{ marginRight: 8, display: 'inline' }}>课程类型:</h6>
              <CheckableTag onChange={checked => handleChange('All', checked)}>All</CheckableTag>
              {props.subjectType && props.subjectType.map(tag => (
                <CheckableTag
                  key={tag.subject_id}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={checked => handleChange(tag, checked)}
                >
                  {tag.subject_text}
                </CheckableTag>
              ))}
            </div>
            <div>
              <span>
                <b>考试类型：</b>
                <Form.Item>
                  {getFieldDecorator('exam_id', {
                    initialValue: ""
                  })(
                    <Select style={{ width: 200, marginTop: 22 }} >
                      {
                        props.examType && props.examType.map((item, index) => {
                          return <Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>
                        })
                      }
                    </Select>,
                  )}
                </Form.Item>
              </span>
              <span>
                <b>题目类型：</b>
                <Form.Item>
                  {getFieldDecorator('questions_type_id', {
                    initialValue: ""
                  })(
                    <Select style={{ width: 200, marginTop: 22 }}>
                      {
                        props.TopicType && props.TopicType.map((item, index) => {
                          return <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
                        })
                      }
                    </Select>,
                  )}
                </Form.Item>
              </span>
              <span>
                <Button
                  type="primary"
                  icon="search"
                  htmlType="submit"
                >
                  查询
            </Button>
              </span>
            </div>
          </div>
          <div className={styles.cont_quest}>
            {
              arr ?
                (
                  arr.length === 0 ? <div>没有数据</div> :
                    arr.map(item => (
                      <div className={styles.list_item} key={item.questions_id}>
                        <div className={styles.item_left} onClick={() => { ToQuestionDetail(item) }}>
                          <div className={styles.item_left_cont}>
                            <h4>{item.title}</h4>
                            <div className={styles.item_style}>
                              <div className="ant-tag ant-tag-blue">{item.questions_type_text}</div>
                              <div className="ant-tag ant-tag-geekblue">{item.subject_text}</div>
                              <div className="ant-tag ant-tag-orange">{item.exam_name}</div>
                            </div>
                            <span>{item.user_name}发布</span>
                          </div>
                        </div>
                        <ul className={styles.item_right}>
                          <li onClick={() => { CompileDetail(item) }}>
                            <span>编辑</span>
                          </li>
                        </ul>
                      </div>
                    ))
                ) : <div>没有数据</div>
            }
          </div>
        </Form>
      </section>
    </div>
  );
}

CheckQuestion.propTypes = {
};
let mapStateProps = (state) => {
  return {
    ...state, ...state.getExamType,
    ...state.getTopicType,
    ...state.getSubject,
    ...state.getCheckQuestion,
    ...state.AllCheckQuestion
  }
}
let mapDispatchProps = (dispatch) => {
  return {
    //获取考试类型
    getExamType: () => {
      dispatch({
        type: "getExamType/getExamType"
      })
    },
    //获取题目类型
    getTopicType: () => {
      dispatch({
        type: "getTopicType/getTopicType"
      })
    },
    //获取课程类型
    getSubject: () => {
      dispatch({
        type: "getSubject/getSubject"
      })
    },
    //查询数据
    getCheckQuestion: (payload) => {
      dispatch({
        type: 'getCheckQuestion/getCheckQuestion',
        payload
      })
    },
    //获取所有试题
    AllCheckQuestion: () => {
      dispatch({
        type: 'AllCheckQuestion/AllCheckQuestion'
      })
    }
  }
}
export default connect(mapStateProps, mapDispatchProps)(Form.create()(CheckQuestion));

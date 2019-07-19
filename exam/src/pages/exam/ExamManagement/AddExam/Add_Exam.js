import React, { useEffect,useState } from 'react';
import { connect } from 'dva';
import styles from './AddExam.scss'
import { Button,Drawer } from 'antd';
import CheckQuestion from '../../QuestionManagement/CheckQuestions/CheckQuestions'

function Add_Exam(props) {
  useEffect(() => {
    props.addExam(props.location.params)
  }, [props.location.params])
  let { title, questions, exam_exam_id } = props.exam_info;
  let toExamList = () => {
    let arr = questions.map(item => {
      return item.questions_id
    })
    props.upExam({ question_ids: `"${JSON.stringify(arr)}"`, "exam_exam_id": exam_exam_id })
    props.history.push({ pathname: '/home/examlist' })
  }
  const [visible,change_visible]=useState(false)
   let showDrawer = () => {
      change_visible(true)
    };

   let onClose = () => {
    change_visible(false)
    };
  return (
    <div className={styles.AddExam}>
      <h2>创建试卷</h2>
      <div className={styles.create_exam}>
        <div className={styles.create_title}>
          <h4><Button style={{height:50}} onClick={()=>{showDrawer()}}>添加试题</Button><p>{title ? title : null}</p><span></span></h4>
          <p>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
        </div>
        <ul className={styles.cont_list}>
          {
            questions && questions.map((item, index) => {
              return (
                <li key={item.questions_id}>
                  <p><span>{index + 1}、{item.title}</span><em>删除</em></p>
                  <pre>
                    <code>
                      {item.questions_stem}
                    </code>
                  </pre>
                </li>
              )
            })
          }
        </ul>
        <Button type="primary" className="login-form-button" style={{ width: 200, height: 50, fontSize: 25 }} onClick={() => { toExamList() }}>
          创建试卷
            </Button>
            <Drawer
              title="添加试题"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
              width="1000"
            >
              <CheckQuestion></CheckQuestion>
          </Drawer>
      </div>
    </div>
  );
}

Add_Exam.propTypes = {
};
const mapToProps = state => {
  return { ...state, ...state.AddExam }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //添加考试
    addExam: payload => {
      dispatch({
        type: "AddExam/addExam",
        payload
      })
    },
    //更新试卷
    upExam: payload => {
      dispatch({
        type: "AddExam/upExam",
        payload
      })
    },
  }
}
export default connect(mapToProps, mapDispatchToProps)(Add_Exam);

import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './AddExam.scss'
import { Button, Drawer } from 'antd';
import CheckQuestion from '../../QuestionManagement/CheckQuestions/CheckQuestions'

function Add_Exam(props) {
  let { title, exam_exam_id } = props.exam_info;
  let toExamList = () => {
    let arr = JSON.parse(localStorage.getItem('exam')).map(item => {
      return item.questions_id
    })
    console.log(arr);
    props.upExam({ question_ids: `"${JSON.stringify(arr)}"`, "exam_exam_id": exam_exam_id })
    props.history.push({ pathname: '/home/examlist' })
  }
  const [visible, change_visible] = useState(false)
  let showDrawer = () => {
    change_visible(true)
    window.localStorage.setItem('flag', 'true')
  };

  let onClose = () => {
    change_visible(false)
    window.localStorage.setItem('flag', 'false')
  };
  let del = (id) => {
    let arr = JSON.parse(localStorage.getItem('exam'))
    let index = arr.findIndex(item => item.questions_id === id);
    arr.splice(index, 1)
    localStorage.setItem('exam', JSON.stringify(arr))
  }
  //从本地获取数据
  let ArrData = JSON.parse(localStorage.getItem('exam'))
  return (
    <div className={styles.AddExam}>
      <h2>创建试卷</h2>
      <div className={styles.create_exam}>
        <div className={styles.create_title}>
          <h4><Button style={{ height: 50 }} onClick={() => { showDrawer() }}>添加试题</Button><p>{title ? title : null}</p><span></span></h4>
          <p>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
        </div>
        <ul className={styles.cont_list}>
          {
            ArrData && ArrData.length !== 0 ? ArrData.map((item, index) => {
              return (
                <li key={item.questions_id}>
                  <p><span>{index + 1}、{item.title}</span><em onClick={() => { del(item.questions_id) }}>删除</em></p>
                  <pre>
                    <code>
                      {item.questions_stem}
                    </code>
                  </pre>
                </li>
              )
            }) : <div>没有试题</div>
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

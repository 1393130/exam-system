import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Tag, Button, Select, Form } from 'antd';
import styles from './ExamListDetail.scss'
function ExamListDetail(props) {
  useEffect(() => {
    props.ExamDetail({ 'exam_exam_id': props.match.params.id.slice(1).split('=')[1] })//获取试卷详情
  }, [])
  let { questions } = props.exam_list_detail
  return (
    <div className={styles.exam_detail_list}>
      <h2>详情页</h2>
      <div className={styles.exam_detail_cont}>
        <ul className={styles.cont_left}>
          {questions && questions.map((item, index) => {
            return <li key={item.questions_id}>
              <p>{index + 1}、{item.title}</p>
              <div>
                <pre>
                  <code>{item.questions_stem}</code>
                </pre>
              </div>
            </li>
          })}
        </ul>
        <div className={styles.cont_right}>

        </div>

      </div>
    </div>
  );
}

ExamListDetail.propTypes = {
};
let mapStateProps = (state) => {
  return {
    ...state, ...state.Examination
  }
}
let mapDispatchProps = (dispatch) => {
  return {
    ExamDetail(payload) {
      dispatch({
        type: 'Examination/ExamDetail',
        payload
      })
    }
  }
}
export default connect(mapStateProps, mapDispatchProps)(Form.create()(ExamListDetail));;

import React , { useState, useEffect}from 'react';
import { connect } from 'dva';
import { Tag, Button, Select , Form } from 'antd';
import styles from './QuestionDetail.scss'
function QuestionDetail(props) {
    let id = props.match.params.id.slice(1).split('=')[1]
    useEffect(() => {
        props.getCheckQuestion({'questions_id':id})//获取试题信息
    },[])
    let {title,user_name,questions_type_text,subject_text,exam_name ,questions_stem , questions_answer}= props.filterQuestion[0]
  return (
    <div className={styles.Detail_wrap}>
         <h2>查看试题</h2>
        <div className={styles.Detail_box}>
            <div className={styles.Detail_left}>
                <h3 className={styles.Detail_setter}>出题人: {user_name}</h3>
                <div className={styles.item_left_cont}>
                    <h4>题目信息</h4>
                    <div className={styles.item_style}>
                        <div className="ant-tag ant-tag-blue">{questions_type_text}</div>
                        <div className="ant-tag ant-tag-geekblue">{subject_text}</div>
                        <div className="ant-tag ant-tag-orange">{exam_name}</div>
                    </div>
                </div>
                <div className={styles.Detail_cont}>
                    <h2>{title}</h2>
                    <pre>
                        <code>
                            {questions_stem}
                        </code>
                    </pre>
                </div>
            </div>
            <div className={styles.Detail_right}>
                <pre>
                    <code>
                        {questions_answer}
                    </code>
                </pre>
            </div>
        </div>
    </div>
  );
}

QuestionDetail.propTypes = {
};
let mapStateProps = (state) => {
    return { 
      ...state,
      ...state.getCheckQuestion
    }
  }
  let mapDispatchProps = (dispatch) => {
    return {
      //查询数据
      getCheckQuestion:(payload) => {
         dispatch({
           type:'getCheckQuestion/getCheckQuestion',
           payload
         })
      }
    }
  }
export default connect(mapStateProps,mapDispatchProps)(Form.create()(QuestionDetail));;

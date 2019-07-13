import React , { useState, useEffect}from 'react';
import { connect } from 'dva';
import { Tag, Button, Select , Form } from 'antd';
import styles from './QuestionDetail.scss'
function QuestionDetail(props) {
    useEffect(() => {
        props.getCheckQuestion({'questions_id':props.match.params.id.slice(1).split('=')[1]})//获取试题信息
    },[])
  return (
    props.filterQuestion.length>0?<div className={styles.Detail_wrap}>
         <h2>查看试题</h2>
        <div className={styles.Detail_box}>
            <div className={styles.Detail_left}>
                <h3 className={styles.Detail_setter}>出题人: {props.filterQuestion[0].user_name}</h3>
                <div className={styles.item_left_cont}>
                    <h4>题目信息</h4>
                    <div className={styles.item_style}>
                        <div className="ant-tag ant-tag-blue">{props.filterQuestion[0].questions_type_text}</div>
                        <div className="ant-tag ant-tag-geekblue">{props.filterQuestion[0].subject_text}</div>
                        <div className="ant-tag ant-tag-orange">{props.filterQuestion[0].exam_name}</div>
                    </div>
                </div>
                <div className={styles.Detail_cont}>
                    <h2>{props.filterQuestion[0].title}</h2>
                    <pre>
                        <code>
                            {props.filterQuestion[0].questions_stem}
                        </code>
                    </pre>
                </div>
            </div>
            <div className={styles.Detail_right}>
                <pre>
                    <code>
                        {props.filterQuestion[0].questions_answer}
                    </code>
                </pre>
            </div>
        </div>
    </div>:<div>数据正在请求</div>
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

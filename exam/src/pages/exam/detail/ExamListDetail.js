import React , { useState, useEffect}from 'react';
import { connect } from 'dva';
import { Tag, Button, Select , Form } from 'antd';
import styles from './ExamListDetail.scss'
function ExamListDetail(props) {
    useEffect(() => {
        props.ExamDetail({'exam_exam_id':props.match.params.id.slice(1).split('=')[1]})//获取试卷详情
    },[])
  return (
        <div>
            详情页
        </div> 
  );
}

ExamListDetail.propTypes = {
};
let mapStateProps = (state) => {
    return { 
      ...state
    }
  }
  let mapDispatchProps = (dispatch) => {
    return {
        ExamDetail(payload) {
            dispatch({
                type:'Examination/ExamDetail',
                payload
            })
        }
    }
  }
export default connect(mapStateProps,mapDispatchProps)(Form.create()(ExamListDetail));;

import React , {useEffect}from 'react';
import { connect } from 'dva';
import { Form } from 'antd';
import styles from './BatchDetail.scss'
function BatchDetail(props) {
    useEffect(() => {
        // props.BatchDetail(props.location.pathname.split('/')[3])
    })
  return (
    <div className={styles.BatchDetail_wrap}>
       <h2>阅卷</h2>
       <div className={styles.BatchDetail_cont}>
        <div className={styles.BatchDetail_left}>

        </div>
        <div className={styles.BatchDetail_right}>
            
        </div>
       </div>
    </div>  
  );
}

BatchDetail.propTypes = {
};
let mapStateProps = (state) => {
    return { 
      ...state,
    }
  }
  let mapDispatchProps = (dispatch) => {
    return {
        BatchDetail(payload) {
            dispatch({
                type:'MarkManageList/BatchDetail',
                payload
            })
        }
    }
  }
export default connect(mapStateProps,mapDispatchProps)(Form.create()(BatchDetail));;

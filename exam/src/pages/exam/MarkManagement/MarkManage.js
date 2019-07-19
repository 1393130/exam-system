import React , { useEffect }from 'react';
import { connect } from 'dva';
import {injectIntl} from 'react-intl';
import styles from './MarkManage.scss';
import { Form , Table } from 'antd';
function MarkManage(props) {
    //学生列表
    let {testList} = props.MarkManageList
    let data = testList
    useEffect(() => {
        props.TestList()
    },[])
    //分页器
    let pagination = {
      defaultPageSize:6,
      showQuickJumper:true,
      showSizeChanger:true
    }
    const columns = [
      {
        title: '班级名',
        dataIndex: 'grade_name',
        key: 'grade_name',
      },
      {
        title: '课程名称',
        dataIndex: 'subject_text',
        key: 'subject_text',
      },
      {
        title: '阅卷状态',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '课程名称',
        dataIndex: 'subject_text',
        key: 'subject_text1',
      },
      {
        title: '成材率',
        dataIndex: 'room_text',
        key: 'room_text',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span onClick={() => classmateBtn()}>
              批卷
          </span>
        ),
      },
    ];
    let classmateBtn = () => {
       props.history.push('/home/batchList')
    }
    return (
        <div className={styles.MarkManage_wrap}>
            <h2>{props.intl.formatMessage({id: 'router.MarkManage.markmanage'})}</h2>
            <div className={styles.StudentManage_cont}>
            <div className={styles.ExamList_list_list}>
              <Table columns={columns} dataSource={data} rowKey='grade_id' pagination={pagination} style={{background:'#ffffff'}}/>
                </div>
            </div>
        </div>
    );
}

MarkManage.propTypes = {
};
let mapStateProps = (state) => {
    return { 
      ...state,
      ...state.TestList
    }
  }
  let mapDispatchProps = (dispatch) => {
    return {
      //学生列表
      TestList:() => {
         dispatch({
           type:'MarkManageList/TestList'
         })
      }
    }
  }
export default injectIntl(connect(mapStateProps,mapDispatchProps)(Form.create()(MarkManage)));

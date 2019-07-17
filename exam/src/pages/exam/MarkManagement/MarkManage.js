import React , {useState,useEffect}from 'react';
import { connect } from 'dva';
import {injectIntl} from 'react-intl';
import styles from './MarkManage.scss';
import { Tag, Button, Select, Form , Radio , Table ,Input , Icon , pagination , Modal , Divider} from 'antd';
function MarkManage(props) {
    console.log(props)
    //学生列表
    let {testList} = props.MarkManageList
    console.log(testList)
    const { Column } = Table;
    let data = testList
    useEffect(() => {
        props.TestList()
    },[])
    return (
        <div className={styles.MarkManage_wrap}>
            <h2>{props.intl.formatMessage({id: 'router.MarkManage.markmanage'})}</h2>
            <div className={styles.StudentManage_cont}>
            <div className={styles.ExamList_list_list}>
                    <Table dataSource={data}  rowKey="student_id"
                    pagination={pagination}
                    >
                        <Column title="班级名" dataIndex='grade_name' rowKey="grade_name" />
                        <Column title="课程名称" dataIndex="subject_text" rowKey="subject_text1" />
                        <Column title="阅卷状态" dataIndex="" rowKey="" />
                        <Column title="课程名称" dataIndex="subject_text" rowKey="room_id" />
                        <Column title="成材率" dataIndex="room_text" rowKey="room_text" />
                        <Column 
                            title="操作"
                            key="action"
                            render={(text, record) => (
                                <span>
                                    批卷
                                </span>
                            )}
                        />
                    </Table>
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

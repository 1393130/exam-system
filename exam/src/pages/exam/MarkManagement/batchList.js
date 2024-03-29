import React , {useEffect}from 'react';
import { connect } from 'dva';
import {injectIntl} from 'react-intl';
import styles from './batchList.scss';
import { Button, Select, Form  , Table  , pagination } from 'antd';
import moment from 'moment'
moment.locale('zh-cn')
function batchList(props) {
  let {detail} = props.MarkManageList
  console.log(detail)
    //从form中校验
    const { getFieldDecorator } = props.form;
    const { Option } = Select;
    // //分页器
    // let pagination = {
    //   defaultPageSize:6,
    //   showQuickJumper:true,
    //   showSizeChanger:true
    // }
    useEffect(() => {
        props.BatchDetail({'grade_id':props.location.search.slice(1).split('=')[1]})
    },[])
    // //处理表单提交
    let handleSubmit = () => {
        props.form.validateFields((err, values) => {
        if (!err) {
            props.EaxminAtions({}) 
        }
        });
    };
    const columns = [
        {
          title: '班级',
          dataIndex: 'grade_name',
          key: 'grade_name',
        },
        {
          title: '姓名',
          dataIndex: 'student_name',
          key: 'student_name',
        },
        {
          title: '阅卷状态',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '开始时间',
          dataIndex: 'start_time',
          key: 'start_time',
          render :(text, record) => (
              <span>
                  {moment(text*1).format('YYYY-MM-DD HH:mm:ss')}
              </span>
          )
        },
        {
            title: '结束时间',
            dataIndex: 'end_time',
            key: 'end_time',
            render :(text, record) => (
                <span>
                    {moment(text*1).format('YYYY-MM-DD HH:mm:ss')}
                </span>
            )
          },
        {
          title: '成材率',
          dataIndex: 'score',
          key: 'score',
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span onClick={() => BatchDetail(text)}>
                批卷
            </span>
          ),
        },
      ];
      let data = detail
      let BatchDetail = (text) => {
          props.history.push(`/home/BatchDetail/${text.exam_student_id}`)
      }
    return (
        <div className={styles.batchList_wrap}>
            <div className={styles.batchList_type}>
            <div className={styles.batchList_form}>
            <Form layout="inline" onSubmit={handleSubmit}>
                <Form.Item label='状态'>
                    {getFieldDecorator('exam_id', {
                          initialValue: ""
                    })(
                    <Select style={{ width: 200 }}>
                    {
                        props.examType && props.examType.map((item, index) => {
                           return <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                        })
                    }
                    </Select>,
                    )}
                </Form.Item>
                <Form.Item label='班级'>
                    {getFieldDecorator('subject_id', {
                        initialValue: ""
                    })(
                        <Select style={{ width: 200 }}>
                        {
                            props.subjectType && props.subjectType.map((item, index) => {
                            return <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                            })
                        }
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                    type="primary"
                    icon="search"
                    htmlType="submit"
                        >
                        查询
                    </Button>
                </Form.Item>
              </Form>
            </div>
            </div>
            <div className={styles.ExamList_list}>
                <div className={styles.ExamList_list_list}>
                <Table columns={columns} dataSource={data} rowKey='exam_student_id' pagination={pagination} />
                </div>
            </div>
        </div>
    );
}

batchList.propTypes = {
};
let mapStateProps = (state) => {
    return { 
      ...state,
      ...state.BatchDetail
    }
  }
  let mapDispatchProps = (dispatch) => {
    return {
         //学生列表
         BatchDetail:(payload) => {
           console.log(payload)
           dispatch({
             type:'MarkManageList/BatchDetail',
             payload
        })
     }
    }
  }
export default injectIntl(connect(mapStateProps,mapDispatchProps)(Form.create()(batchList)));

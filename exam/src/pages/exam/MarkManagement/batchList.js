import React , {useState,useEffect}from 'react';
import { connect } from 'dva';
import {injectIntl} from 'react-intl';
import styles from './batchList.scss';
import { Tag, Button, Select, Form , Radio , Table ,Input , Icon , pagination , Modal , Divider} from 'antd';
import moment from 'moment'
moment.locale('zh-cn')
function batchList(props) {
    console.log(props)
    //从form中校验
    const { getFieldDecorator } = props.form;
    const { Option } = Select;
    const { Column, ColumnGroup } = Table
    // //分页器
    // let pagination = {
    //   defaultPageSize:6,
    //   showQuickJumper:true,
    //   showSizeChanger:true
    // }
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
          dataIndex: 'subject_text',
          key: 'subject_text',
        },
        {
          title: '阅卷状态',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '开始时间',
          dataIndex: 'subject_text',
          key: 'subject_text',
          render :(text, record) => (
              <span>
                  {moment(text.start_time*1).format('YYYY-MM-DD HH:mm:ss')}
              </span>
          )
        },
        {
            title: '结束时间',
            dataIndex: 'subject_text',
            key: 'subject_text',
            render :(text, record) => (
                <span>
                    {moment(text.end_time*1).format('YYYY-MM-DD HH:mm:ss')}
                </span>
            )
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
            <span>
                批卷
            </span>
          ),
        },
      ];
      let data = []
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
                <Table columns={columns} dataSource={data} rowKey='grade_id' pagination={pagination} />
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
    }
  }
  let mapDispatchProps = (dispatch) => {
    return {
        
    }
  }
export default injectIntl(connect(mapStateProps,mapDispatchProps)(Form.create()(batchList)));

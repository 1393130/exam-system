import React , {useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './ExamList.scss'
import { Tag, Button, Select, Form , Radio , Table , Divider} from 'antd';
import moment from 'moment'
moment.locale('zh-cn')
function ExamList(props) {
    console.log(props)
    //从form中校验
    const { getFieldDecorator } = props.form;
    const { Option } = Select;
    const { Column, ColumnGroup } = Table
    //点击
    let [flag , changeBtn] = useState('all')
    let handleBtnChange = (e) => {
        changeBtn(e.target.value)
        if(flag === 'all') {
            console.log(2)                
        } else if(flag === 'underway') {
            console.log(2)
        } else if(flag === 'stop') {
            console.log(3)
        }  
    }
    useEffect(() => {
        props.getExamType()//获取考试类型
        props.getSubject()//获取课程类型
        props.EaxminAtions({}) //试卷列表
      }, [])
    // //处理表单提交
    let handleSubmit = () => {
        props.form.validateFields((err, values) => {
        if (!err) {
            props.EaxminAtions({}) 
        }
        });
    };
    let {list} = props.Examination
    let data = list
    //点击跳考试详情
    let ToQuestionDetail = (item) => {
        props.history.push({ pathname: `/home/ExamListDetail/?id=${item}` })
    }
    return (
        <div className={styles.ExamList_wrap}>
            <h2>试卷列表</h2>
            <div className={styles.ExamList_type}>
            <div className={styles.ExamList_form}>
            <Form layout="inline" onSubmit={handleSubmit}>
                <Form.Item label='考试类型'>
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
                <Form.Item label='课程'>
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
                <div className={styles.ExamList_list_title}>
                    <h3>试卷列表</h3>
                    <Radio.Group value={flag} onChange={handleBtnChange}>
                        <Radio.Button value="all">全部</Radio.Button>
                        <Radio.Button value="underway">进行中</Radio.Button>
                        <Radio.Button value="stop">已结束</Radio.Button>
                    </Radio.Group>
                </div>
                <div className={styles.ExamList_list_list}>
                    <Table dataSource={data} rowKey="exam_id">
                        <Column title="试卷信息" dataIndex='title' rowKey="title" />
                        <Column title="班级" dataIndex="room_text" rowKey="room_text" />
                        <Column title="创建人" dataIndex="user_name" rowKey="user_name" />
                        <Column 
                            title="开始时间"
                            key="start_time"
                            render={(text, record) => (
                                <span>
                                    {moment(text.start_time*1).format('YYYY-MM-DD HH:mm:ss')}
                                </span>
                            )}
                        />
                         <Column 
                            title="开始时间"
                            key="end_time"
                            render={(text, record) => (
                                <span>
                                    {moment(text.start_time*1).format('YYYY-MM-DD HH:mm:ss')}
                                </span>
                            )}
                        />
                        <Column 
                            title="操作"
                            key="action"
                            render={(text, record) => (
                                <span onClick={() => { ToQuestionDetail('exam_exam_id') }}>
                                <a href="javascript:;">详情</a>
                                <Divider type="详情" />
                                </span>
                            )}
                        />
                    </Table> 
                </div>
            </div>
        </div>
    );
}

ExamList.propTypes = {
};
const mapToProps = state => {
    return { 
        ...state, 
        ...state.getExamType, 
        ...state.getSubject,
        ...state.EaxminAtions
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      //获取考试类型
      getExamType: () => {
        dispatch({
          type: "getExamType/getExamType"
        })
      },
      //获取课程类型
      getSubject: () => {
        dispatch({
          type: "getSubject/getSubject"
        })
      },
      //试卷列表
      EaxminAtions:(payload) => {
          console.log(payload)
          dispatch({
              type:'Examination/EaxminAtions',
              payload
          })
      }
    }
  }
export default connect(mapToProps,mapDispatchToProps)(Form.create()(ExamList));

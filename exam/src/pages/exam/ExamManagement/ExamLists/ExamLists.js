import React , {useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './ExamList.scss'
import { Tag, Button, Select, Form , Radio , Table} from 'antd';
function ExamList(props) {
    //从form中校验
    const { getFieldDecorator } = props.form;
    const { Option } = Select;
    const { Column, ColumnGroup } = Table
    //点击
    let [flag , changeBtn] = useState('all')
    let handleBtnChange = (e) => {
        console.log(e)
    }
    let data = [
        {
            'title':'你好'
        }
    ]
    useEffect(() => {
        props.getExamType()//获取考试类型
        props.getSubject()//获取课程类型
      }, [])
    // //处理表单提交
    // let handleSubmit = () => {
    //     props.form.validateFields((err, values) => {
    //     if (!err) {
    //         if (values.exam_id !== '') {
    //         let examID = props.examType.find(item => item.exam_name === values.exam_id).exam_id;
    //         values.exam_id = examID
    //         }
    //         let obj = {
    //         ...values,
    //         subject_id: subjectID
    //         }
    //         for (let i in obj) {
    //         if (obj[i] === "") {
    //             delete obj[i]
    //         }
    //         }
    //         props.getCheckQuestion(obj)
    //     }
    //     });
    // };
    return (
        <div className={styles.ExamList_wrap}>
            <h2>试卷列表</h2>
            <div className={styles.ExamList_type}>
            <div className={styles.ExamList_form}>
            <Form layout="inline">
                <Form.Item label='考试类型'>
                    {getFieldDecorator('exam_id', {
                          initialValue: ""
                    })(
                    <Select style={{ width: 200 }}>
                    {
                        props.examType && props.examType.map((item, index) => {
                           return <Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>
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
                            return <Option value={item.subject_text} key={item.subject_id}>{item.subject_text}</Option>
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
                    <Table dataSource={data} rowKey="questions_type_id">
                        <Column title="试卷信息" dataIndex='questions_type_id' rowKey="questions_type_id" />
                        <Column title="班级" dataIndex="questions_type_text" rowKey="questions_type_id" />
                        <Column title="创建人" dataIndex="address1" rowKey="questions_type_id1" />
                        <Column title="开始时间" dataIndex="address2" rowKey="questions_type_id2" />
                        <Column title="结束时间" dataIndex="address3" rowKey="questions_type_id3" />
                        <Column title="操作" dataIndex="address4" rowKey="questions_type_id4" />
                    </Table> 
                </div>
            </div>
        </div>
    );
}

ExamList.propTypes = {
};
const mapToProps = state => {
    return { ...state, ...state.getExamType, ...state.getSubject}
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
       //查询数据
        getCheckQuestion: (payload) => {
            dispatch({
            type: 'AllCheckQuestion/getCheckQuestion',
            payload
            })
        },
    }
  }
export default connect(mapToProps,mapDispatchToProps)(Form.create()(ExamList));

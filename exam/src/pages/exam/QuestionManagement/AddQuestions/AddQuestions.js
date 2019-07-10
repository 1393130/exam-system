import React from 'react';
import { connect } from 'dva';
import Editor from 'for-editor'
import styles from './AddQuestions.scss'
import { Input, Select, Button } from 'antd';

function AddQuestion() {
  const optionsOne = [{ label: '周考1', value: '周考1' }, { label: '周考2', value: '周考2' }, { label: '周考3', value: '周考3' }, { label: '月考', value: '月考' }]
  const optionsTwo = [{ label: '简答题', value: '简答题' }, { label: '代码阅读题', value: '代码阅读题' }, { label: '代码补全', value: '代码补全' }, { label: '修改bug', value: '修改bug' }, { label: '手写代码', value: '手写代码' }]

  const { Option } = Select;
  return (
    <div className={styles.addquestion}>
      <h2>添加试题</h2>
      <section className={styles.addquestion_cont}>
        <h4>题目信息</h4>
        <div className={styles.question_stem}>
          <h4>题干</h4>
          <Input placeholder="请输入题目标题，不超过20个字" />
        </div>
        <div className={styles.topic_theme}>
          <h4>题目主题</h4>
          <Editor style={{ height: 330 }}></Editor>
        </div>
        <div className={styles.test_type}>
          <h4>请选择考试类型：</h4>
          <Select defaultValue="周考1" style={{ width: 200 }}>
            {
              optionsOne.map((item, index) => {
                return <Option value={item.value} key={index}>{item.value}</Option>
              })
            }
          </Select>
        </div>
        <div className={styles.test_type}>
          <h4>请选择课程类型：</h4>
          <Select defaultValue="javaScript上" style={{ width: 200 }}>
            {
              optionsTwo.map((item, index) => {
                return <Option value={item.value} key={index}>{item.value}</Option>
              })
            }
          </Select>
        </div>
        <div className={styles.test_type}>
          <h4>请选择题目类型：</h4>
          <Select defaultValue="简答题" style={{ width: 200 }}>
            {
              optionsTwo.map((item, index) => {
                return <Option value={item.value} key={index}>{item.value}</Option>
              })
            }
          </Select>
        </div>
        <div className={styles.topic_theme}>
          <h4>答案信息</h4>
          <Editor style={{ height: 330 }}></Editor>
        </div>
        <Button type="primary" size="large">
          提交
        </Button>
      </section>
    </div>
  );
}

AddQuestion.propTypes = {
};

export default connect()(AddQuestion);

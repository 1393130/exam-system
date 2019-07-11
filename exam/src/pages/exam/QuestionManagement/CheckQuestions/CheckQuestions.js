import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './CheckQuestions.scss';
import { Tag, Button, Select } from 'antd';


function CheckQuestion() {
  const { CheckableTag } = Tag;
  const tagsFromServer = ['All', 'javaScript上', 'javaScript下', '模块化开发', '移动端开发', 'node基础', '组件化开发(vue)', '渐进式开发(react)', 'javaScript高级', 'node高级'];
  const [selectedTags, changeselectedTags] = useState([])

  //判断全选
  useEffect(() => {
    console.log(123)
    let flag = tagsFromServer.slice(1).every(item => {
      if (selectedTags.includes(item)) {
        return true
      }
      return false
    })
    console.log(flag)
    if (flag) {
      changeselectedTags(tagsFromServer)
    } else {
      changeselectedTags(selectedTags)
    }
  }, [selectedTags])

  //选择分类
  let handleChange = (tag, checked) => {
    if (tag === "All") {
      if (selectedTags.length !== tagsFromServer.length) {
        changeselectedTags(tagsFromServer)
      } else {
        changeselectedTags([])
      }
    } else {
      const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
      changeselectedTags(nextSelectedTags)
    }

  }

  //考试类型
  const optionsOne = [{ label: '周考1', value: '周考1' }, { label: '周考2', value: '周考2' }, { label: '周考3', value: '周考3' }, { label: '月考', value: '月考' }]
  //考试类型发生变化
  function onChangeOne(value) {
    console.log(value);
  }
  //题目类型
  const optionsTwo = [{ label: '简答题', value: '简答题' }, { label: '代码阅读题', value: '代码阅读题' }, { label: '代码补全', value: '代码补全' }, { label: '修改bug', value: '修改bug' }, { label: '手写代码', value: '手写代码' }]
  //题目类型改变
  function onChangeTwo(value) {
    console.log(value);
  }
  //下拉框改变
  function handleChangeSelect(value) {
    console.log(`selected ${value}`);
  }
  const { Option } = Select;
  return (
    <div className={styles.checkquest}>
      <h2>查看试题</h2>
      <section className={styles.checkquest_cont}>
        <div className={styles.classify_quest}>
          <div>
            <h6 style={{ marginRight: 8, display: 'inline' }}>课程类型:</h6>
            {tagsFromServer.map(tag => (
              <CheckableTag
                key={tag}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={checked => handleChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </div>
          <div>
            <span>考试类型：
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChangeSelect}>
                {
                  optionsOne.map((item, index) => {
                    return <Option value={item.value} key={index}>{item.value}</Option>
                  })
                }
              </Select>
            </span>
            <span>题目类型：
              <Select defaultValue="lucy" style={{ width: 120 }} >
                {
                  optionsTwo.map((item, index) => {
                    return <Option value={item.value} key={index}>{item.value}</Option>
                  })
                }
              </Select>
            </span>
            <span><Button
              type="primary"
              icon="search"
            // loading={this.state.iconLoading}
            // onClick={this.enterIconLoading}
            >
              查询
            </Button>
            </span>
          </div>
        </div>
        <div className={styles.cont_quest}>
          <div className={styles.list_item}>
                <div className={styles.item_left}>
                  <a href="#">
                    <h4>机器人归位</h4>
                    <div className={styles.item_style}>
                      <div className="ant-tag ant-tag-blue">代码补全</div>
                      <div className="ant-tag ant-tag-geekblue">javaScript上</div>
                      <div className="ant-tag ant-tag-orange">周考1</div>
                    </div>
                    <span>dingshaoshan 发布</span>
                  </a>
                </div>
                <ul className={styles.item_right}>
                  <li>
                    <a href="#">编辑</a>
                  </li>
                </ul>
          </div>
          <div className={styles.list_item}>
                <div className={styles.item_left}>
                  <a href="#">
                    <h4>机器人归位</h4>
                    <div className={styles.item_style}>
                      <div className="ant-tag ant-tag-blue">代码补全</div>
                      <div className="ant-tag ant-tag-geekblue">javaScript上</div>
                      <div className="ant-tag ant-tag-orange">周考1</div>
                    </div>
                    <span>dingshaoshan 发布</span>
                  </a>
                </div>
                <ul className={styles.item_right}>
                  <li>
                    <a href="#">编辑</a>
                  </li>
                </ul>
          </div>
          <div className={styles.list_item}>
                <div className={styles.item_left}>
                  <a href="#">
                    <h4>机器人归位</h4>
                    <div className={styles.item_style}>
                      <div className="ant-tag ant-tag-blue">代码补全</div>
                      <div className="ant-tag ant-tag-geekblue">javaScript上</div>
                      <div className="ant-tag ant-tag-orange">周考1</div>
                    </div>
                    <span>dingshaoshan 发布</span>
                  </a>
                </div>
                <ul className={styles.item_right}>
                  <li>
                    <a href="#">编辑</a>
                  </li>
                </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

CheckQuestion.propTypes = {
};

export default connect()(CheckQuestion);

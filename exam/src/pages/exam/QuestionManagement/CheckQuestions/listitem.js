import React from 'react';
import { connect } from 'dva';
import styles from './CheckQuestions.scss'

function listItem(props) {
    let { title, questions_type_text, subject_text, exam_name, user_name, questions_id } = props.list;
    //点击跳考试详情
    // let ToQuestionDetail = (item) => {
    //     console.log(item,props)
    //     // props.history.push({ pathname: `/home/QuestionDetail/?id=${item}` })
    // }
    // //点击跳转编辑页
    // let CompileDetail = (item) => {
    //     console.log(item)
    //     props.history.push({ pathname: `/home/editDetail/?id=${item}` })
    // }
    return (
        <div className={styles.list_item} key={questions_id}>
            <div className={styles.item_left}>
                <div className={styles.item_left_cont}>
                    <h4>{title}</h4>
                    <div className={styles.item_style}>
                        <div className="ant-tag ant-tag-blue">{questions_type_text}</div>
                        <div className="ant-tag ant-tag-geekblue">{subject_text}</div>
                        <div className="ant-tag ant-tag-orange">{exam_name}</div>
                    </div>
                    <span>{user_name}发布</span>
                </div>
            </div>
            <ul className={styles.item_right}>
                <li onClick={() => {  }}>
                    <span>添加</span>
                </li>
                <li onClick={() => {  }}>
                    <span>详情</span>
                </li>
            </ul>
        </div>
    );
}

listItem.propTypes = {
};

export default connect()(listItem);

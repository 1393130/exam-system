import React from 'react';
import { connect } from 'dva';
import styles from './CheckQuestions.scss'

function listItem(props) {
    let { title, questions_type_text, subject_text, exam_name, user_name, questions_id } = props.list;
    let add = () => {
        let ArrData=JSON.parse(window.localStorage.getItem('exam'))
        let flag = ArrData.findIndex(item => item.questions_id === questions_id);
        if (flag === -1) {
            ArrData.push({ title, questions_id })
            window.localStorage.setItem('exam', JSON.stringify(ArrData));
        }
    }
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
                <li onClick={() => { add() }}>
                    <span>添加</span>
                </li>
                <li onClick={() => { }}>
                    <span>详情</span>
                </li>
            </ul>
        </div>
    );
}

listItem.propTypes = {
};

export default connect()(listItem);

import React from 'react';
import { connect } from 'dva';
import { Tag, Button, Select , Form } from 'antd';
import styles from './QuestionDetail.css'
function QuestionDetail(props) {
    console.log(props)
  return (
    <div className={styles.Detail_wrap}>
        <div className={styles.Detail_left}>
            <h3 className={styles.Detail_setter}>出题人: dingshaoshan</h3>
            <div className={styles.item_left_cont}>
                <h4>题目信息</h4>
                <div className={styles.item_style}>
                    <div className="ant-tag ant-tag-blue">代码补全</div>
                    <div className="ant-tag ant-tag-geekblue">JavaScript上</div>
                    <div className="ant-tag ant-tag-orange">周考1</div>
                </div>
            </div>
            <div className={styles.Detail_cont}>
                <h2>机器人归位</h2>
                <p>在二维平面上，有一个机器人从原点(0,0)开始,给出它的移动顺序,判断这个机器人在完成移动后是否在（0,0）处借宿。</p>
                <p>移动顺序由字符串表示.机器人的有效动作有r(右),l(左),l(左)和,l(左).如果机器人在完成所有动作后返回原点,则返回true,否则返回false</p>
                <div className={styles.Detail_living}>
                    <b>实例1：</b>
                    <div className={styles.Detail_living_cont}>
                        <p>移动顺序由字符串表示.机器人的有效动作有r(右),l(左),l(左)和,l(左)</p>
                        <p>移动顺序由字符串表示.机器人的有效动作有r(右),l(左),l(左)和,l(左)</p>
                        <p>移动顺序由字符串表示.机器人的有效动作有r(右),l(左),l(左)和,l(左)</p>
                    </div>
                </div>
                <div className={styles.Detail_living}>
                    <b>实例2：</b>
                    <div className={styles.Detail_living_cont}>
                        <p>移动顺序由字符串表示.机器人的有效动作有r(右),l(左),l(左)和,l(左)</p>
                        <p>移动顺序由字符串表示.机器人的有效动作有r(右),l(左),l(左)和,l(左)</p>
                        <p>移动顺序由字符串表示.机器人的有效动作有r(右),l(左),l(左)和,l(左)</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.Detail_right}></div>
    </div>
  );
}

QuestionDetail.propTypes = {
};

export default connect()(QuestionDetail);

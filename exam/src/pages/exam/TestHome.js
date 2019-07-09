import React from 'react';
import styles from "./TestHome.scss"
import { connect } from 'dva';

function TestHome() {
  return (
    <div className={styles.testHome}>
        <div className={styles.testHome_top}></div>
        <div className={styles.testHome_bottom}></div>
    </div>
  );
}

TestHome.propTypes = {
};

export default connect()(TestHome);

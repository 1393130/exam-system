import React from 'react';
import { connect } from 'dva';

function ClassManage() {
    return (
        <div>
            班级管理
    </div>
    );
}

ClassManage.propTypes = {
};

export default connect()(ClassManage);

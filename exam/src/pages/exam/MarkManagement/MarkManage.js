import React from 'react';
import { connect } from 'dva';

function MarkManage() {
    return (
        <div>
            批卷管理
    </div>
    );
}

MarkManage.propTypes = {
};

export default connect()(MarkManage);

import React from 'react';
import { connect } from 'dva';

function ClassroomManage() {
    return (
        <div>
            教室管理
    </div>
    );
}

ClassroomManage.propTypes = {
};

export default connect()(ClassroomManage);

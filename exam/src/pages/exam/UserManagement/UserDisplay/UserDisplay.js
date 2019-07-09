import React from 'react';
import { connect } from 'dva';

function UserDisplay() {
    return (
        <div>
            用户展示
    </div>
    );
}

UserDisplay.propTypes = {
};

export default connect()(UserDisplay);

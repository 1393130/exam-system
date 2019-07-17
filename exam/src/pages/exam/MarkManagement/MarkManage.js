import React from 'react';
import { connect } from 'dva';
import {injectIntl} from 'react-intl';

function MarkManage(props) {
    return (
        <div>
            {props.intl.formatMessage({id: 'router.MarkManage.markmanage'})}
    </div>
    );
}

MarkManage.propTypes = {
};

export default injectIntl(connect()(MarkManage));

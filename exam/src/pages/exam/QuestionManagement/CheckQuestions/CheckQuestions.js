import React from 'react';
import { connect } from 'dva';

function CheckQuestion() {
  return (
    <div>
        查看试题
    </div>
  );
}

CheckQuestion.propTypes = {
};

export default connect()(CheckQuestion);

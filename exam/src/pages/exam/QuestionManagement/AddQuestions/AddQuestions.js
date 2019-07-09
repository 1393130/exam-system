import React from 'react';
import { connect } from 'dva';

function AddQuestion() {
  return (
    <div>
      添加试题
    </div>
  );
}

AddQuestion.propTypes = {
};

export default connect()(AddQuestion);

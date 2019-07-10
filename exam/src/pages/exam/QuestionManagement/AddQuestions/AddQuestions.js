import React from 'react';
import { connect } from 'dva';
import Editor from 'for-editor'

function AddQuestion() {
  return (
    <div>
      添加试题
      <Editor style={{height:200}}></Editor>
    </div>
  );
}

AddQuestion.propTypes = {
};

export default connect()(AddQuestion);

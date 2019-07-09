import React from 'react';
import { connect } from 'dva';

function ClassifyQuestion() {
  return (
    <div>
        试题分类
    </div>
  );
}

ClassifyQuestion.propTypes = {
};

export default connect()(ClassifyQuestion);

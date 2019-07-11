import React from 'react';
import { connect } from 'dva';

function QuestionDetail(props) {
    console.log(props)
  return (
    <div>
        详细
    </div>
  );
}

QuestionDetail.propTypes = {
};

export default connect()(QuestionDetail);

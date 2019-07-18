import request from '../utils/request';
//添加试卷
export function addExam(params) {
  return request.post('/exam/exam',params);
}
//更新试卷
export function upExam(params){
  return request.put(`/exam/exam/${params.exam_exam_id}`,{question_ids:params.question_ids})
}

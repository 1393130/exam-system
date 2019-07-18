import request from '../utils/request';
//获取试卷列表接口
export function Examination(params) {
  return request.get('/exam/exam', { params });
}
export function ExamiListDetail(params) {
  console.log(params)
  return request.get(`/exam/exam/${params.exam_exam_id}`, { params });
}
import request from '../utils/request';

export function addExam(params) {
  return request.post('/exam/exam',params);
}

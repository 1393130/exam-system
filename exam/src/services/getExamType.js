import request from '../utils/request';

export function getExamType() {
  return request.get('/exam/examType');
}

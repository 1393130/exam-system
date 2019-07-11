import request from '../utils/request';

export function addQuestion(params) {
  return request.post('/exam/questions',params);
}

import request from '../utils/request';

export function editQuestion(params) {
  return request.put('/exam/questions/update',params);
}

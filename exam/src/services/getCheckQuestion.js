import request from '../utils/request';

export function getCheckQuestion(params) {
  return request.get(`/exam/questions/condition`,{params});
}

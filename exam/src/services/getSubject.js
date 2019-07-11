import request from '../utils/request';

export function getSubject() {
  return request.get('/exam/subject');
}

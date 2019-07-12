import request from '../utils/request';

export function AllCheckQuestion() {
  return request.get('/exam/questions/new');
}

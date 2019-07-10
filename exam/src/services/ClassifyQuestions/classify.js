import request from '../../utils/request';

export function getClassify() {
  return request.get('/exam/getQuestionsType');
}

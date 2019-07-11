import request from '../utils/request';

export function getTopicType() {
  return request.get('/exam/getQuestionsType');
}

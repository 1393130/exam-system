import request from '../../utils/request';
//请求接口  数据渲染
export function getClassify() {
  return request.get('/exam/getQuestionsType');
}

import request from '../utils/request';
//获取试卷列表接口
export function Examination(params) {
  return request.get('/exam/exam',{params});
}
export function ExamiListDetail(params) {
  return request.get('/exam/exam/w5tcy-g2dts',{params});
}
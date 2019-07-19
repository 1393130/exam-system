import request from '../utils/request';
//用户登录
export function login(params) {
  return request.post('/user/login',params);
}
//获取视图权限数据
export function getAuthority() {
  return request.get('/user/view_authority')
}

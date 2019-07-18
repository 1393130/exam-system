import request from '../utils/request';

//获取用户信息
export function getUserInfo() {
  return request.get('/user/userInfo');
}
//获取用户信息
export function getUserInfoAgin() {
  return request.get('/user/userInfo');
}

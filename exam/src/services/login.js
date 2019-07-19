import request from '../utils/request';
//用户登录
export function login(params) {
  return request.post('/user/login',params);
}

export function ViewAuthority(){
  return request.get('/user/view_authority')
}


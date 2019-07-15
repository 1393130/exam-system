import request from '../utils/request';

export function getView_authority() {
  return request.get('/user/view_authority');
}

export function getApi_authority(){
    return request.get('/user/api_authority')
}

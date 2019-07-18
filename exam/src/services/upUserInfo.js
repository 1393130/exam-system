import request from '../utils/request';

export function upUserInfo(params) {
    return request.put('/user/user',params);
}

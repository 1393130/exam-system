import request from '../utils/request';

export function userDisplay(path) {
    return request.get(path);
}

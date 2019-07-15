import request from '../utils/request'
//添加用户
export function AddUsers(params) {
    console.log(params)
    return request.post('/user',params)
}
//选择身份id
export function AddRankID() {
    return request.get('/user/identity')
}
import request from '../utils/request'
//添加用户
export function AddUsers(params) {
    return request.post('/user', params)
}
//选择身份id
export function AddRankID() {
    return request.get('/user/identity')
}
//更新用户信息
export function UpUser(params) {
    return request.put('/user/user',params)
}
//添加身份
export function AddRank(params) {
    console.log(params)
    return request.get('/user/identity/edit',{params} )
}
//获取视图权限信息
export function getView_authority() {
    return request.get('/user/view_authority');
}
//获取api接口权限数据
export function getApi_authority() {
    return request.get('/user/api_authority')
}
//给身份设定api接口权限
export function setIdentityApi(params) {
    return request.post('/user/setIdentityApi', params)
}
//给身份设定视图权限
export function setIdentityView(params) {
    return request.post('/user/setIdentityView', params)
}
//添加api接口权限
export function addAuthorityApi(params){
    return request.get('/user/authorityApi/edit',{params})
}

import request from '../utils/request';
//获取已经分配教室的班级
export function getGrade() {
  return request.get('/manger/grade');
}
//获取所有教室
export function getRoom() {
  return request.get('/manger/room')
}
//添加班级接口
export function addGrade(params) {
  return request.post('/manger/grade', params)
}
//删除班级接口
export function deleteGrade(params) {
  return request.delete('/manger/grade/delete', { params })
}
//编辑接口
export function editGrade(params){
  return request.put('/manger/grade/update',{params})
}
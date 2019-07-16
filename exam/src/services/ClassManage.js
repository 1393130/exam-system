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
export function deleteGrade(data) {
  return request.delete('/manger/grade/delete', { data })
}
//编辑接口
export function editGrade(params){
  return request.put('/manger/grade/update',params)
}
//添加教室
export function addClassroom(params){
  return request.post('/manger/room',params)
}
//删除教室
export function delClassroom(data){
  return request.delete('/manger/room/delete',{data})
}
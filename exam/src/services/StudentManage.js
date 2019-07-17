import request from '../utils/request';
//已经分班的接口
export function StudentManage() {
    return request.get('/manger/student');
}
//没有分班的接口
export function WithoutClasses() {
    return request.get('/manger/student/new');
}
//删除学生接口
export function StudentDelete(data) {
    console.log(data.id)
    return request.delete(`/manger/student/${data.id}`);
}
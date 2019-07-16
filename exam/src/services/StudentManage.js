import request from '../utils/request';
//已经分班的接口
export function StudentManage() {
    return request.get('/manger/student');
}

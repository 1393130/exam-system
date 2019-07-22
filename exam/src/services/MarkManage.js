import request from '../utils/request';
//待批班级的学生
export function MarkManage() {
    return request.get('/manger/grade');
}
//获取学生列表
export function batchList() {
    return request.get('/exam/student');
}
//学生试卷
export function batchPaper(params) {
    console.log(params)
    return request.get('/exam/student',params);
}
import request from '../utils/request';
//获取学生试卷列表接口
export function MarkManage() {
    return request.get('/manger/grade');
}
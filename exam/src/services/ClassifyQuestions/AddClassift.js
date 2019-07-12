import request from '../../utils/request'
//请求添加试题分类 接口  
export function AddClassify(params) {
    return request.get(`/exam/insertQuestionsType`,{params})
}
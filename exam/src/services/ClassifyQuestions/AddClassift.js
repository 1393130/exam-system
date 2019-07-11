import request from '../../utils/request'
export function AddClassify(params) {
    return request.get(`/exam/insertQuestionsType?text=${params.text}&sort=${params.sort}`)
}
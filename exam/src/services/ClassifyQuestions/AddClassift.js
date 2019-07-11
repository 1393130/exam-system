import request from '../../utils/request'
export function AddClassify() {
    return request.get('/exam/insertQuestionsType')
}
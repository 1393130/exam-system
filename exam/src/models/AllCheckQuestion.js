import { AllCheckQuestion } from "../services/AllCheckQuestion"
export default {

    namespace: 'AllCheckQuestion',

    state: {
        addInfo:0
    },
    effects: {
        *AllCheckQuestion({ payload }, { call, put }) {  // eslint-disable-line
            // console.log(payload);
            let data = yield call(AllCheckQuestion,payload)
            console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'AllQuestion',
                payload: data.data
            });
        },
    },

    reducers: {
        AllQuestion(state, action) {
            return { ...state, AllQuestions:action.payload };
        },
    },

};

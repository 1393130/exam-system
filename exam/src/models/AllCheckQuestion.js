import { AllCheckQuestion } from "../services/AllCheckQuestion"
import { getCheckQuestion } from "@/services/getCheckQuestion"
export default {

    namespace: 'AllCheckQuestion',

    state: {
        addInfo:0,
        arr:[]
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
        *getCheckQuestion({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(getCheckQuestion,payload)
            console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upCheckQuestion',
                payload: data.data
            });
        },
    },

    reducers: {
        AllQuestion(state, action) {
            return { ...state, arr:action.payload };
        },
        upCheckQuestion(state, action) {
            return { ...state, arr:action.payload };
        },
    },

};

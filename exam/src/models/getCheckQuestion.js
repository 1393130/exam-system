import { getCheckQuestion } from "@/services/getCheckQuestion"
export default {

    namespace: 'getCheckQuestion',

    state: {},

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
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
        upCheckQuestion(state, action) {
            return { ...state, filterQuestion:action.payload };
        },
    },

};

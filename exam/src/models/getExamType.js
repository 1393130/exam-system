import { getExamType } from "@/services/getExamType"
export default {

    namespace: 'getExamType',

    state: {},

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *getExamType({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(getExamType)
            // console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upExamType',
                payload: data.data
            });
        },
    },

    reducers: {
        upExamType(state, action) {
            return { ...state, examType:action.payload };
        },
    },

};

import { getSubject } from "../services/getSubject"
export default {

    namespace: 'getSubject',

    state: {},

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *getSubject({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(getSubject)
            // console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upSubject',
                payload: data.data
            });
        },
    },

    reducers: {
        upSubject(state, action) {
            return { ...state, subjectType:action.payload };
        },
    },

};

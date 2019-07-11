import { addQuestion } from "../services/addQuestion"
export default {

    namespace: 'addQuestion',

    state: {
        addInfo:0
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *addQuestion({ payload }, { call, put }) {  // eslint-disable-line
            // console.log(payload);
            let data = yield call(addQuestion,payload)
            // console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upQuestion',
                payload: data.code
            });
        },
    },

    reducers: {
        upQuestion(state, action) {
            return { ...state, addInfo:action.payload };
        },
    },

};

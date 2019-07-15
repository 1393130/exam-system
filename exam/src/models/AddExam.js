import { addExam } from "../services/AddExam"
export default {

    namespace: 'AddExam',

    state: {
        add_exam_info:0
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *addExam({ payload }, { call, put }) {  // eslint-disable-line
            console.log(payload);
            let data = yield call(addExam,payload)
            console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upadd_exam_info',
                payload: data.code
            });
        },
    },

    reducers: {
        upadd_exam_info(state, action) {
            return { ...state, add_exam_info:action.payload };
        },
    },

};

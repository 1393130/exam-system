import { addExam } from "../services/AddExam"
export default {

    namespace: 'AddExam',

    state: {
        exam_info:{}
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *addExam({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(addExam,payload)
            console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upadd_exam_info',
                payload: data.data
            });
        },
    },

    reducers: {
        upadd_exam_info(state, action) {
            return { ...state, exam_info:action.payload };
        },
    },

};

import { StudentManage } from "../services/StudentManage"
export default {

    namespace: 'Student',

    state: {
        classes: []
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步
    effects: {
        *StudentList({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(StudentManage, payload)
            console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upStudent',
                payload: data.data
            });
        },
    },
    //同步
    reducers: {
        upStudent(state, action) {
            return { ...state, classes: action.payload };
        },
    },

};

import { addExam, upExam } from "../services/AddExam"
import { Examination } from "../services/Examination"
export default {

    namespace: 'AddExam',

    state: {
        exam_info: {}
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *addExam({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(addExam, payload)
            if (data.code === 0) {
                return
            }
            window.localStorage.setItem('exam', JSON.stringify(data.data.questions))
            yield put({
                type: 'upadd_exam_info',
                payload: data.data
            });
        },
        *EaxminAtions({ payload }, { call, put }) {  // eslint-disable-line
            //获取到的数据
            let data = yield call(Examination, payload)
            yield put({
                type: "upEaxminAtion",
                payload: data.exam
            })
        },
        //更新试卷
        *upExam({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(upExam, payload)
            console.log(data);
            if (data.code === 1) {
                yield put({
                    type: "EaxminAtions"
                })
            }
        },

    },

    reducers: {
        upadd_exam_info(state, action) {
            return { ...state, exam_info: action.payload };
        },
        upEaxminAtion(state, action) {
            return { ...state, list: action.payload }
        },
    },

};

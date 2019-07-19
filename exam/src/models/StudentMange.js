import { StudentManage , WithoutClasses , StudentDelete } from "../services/StudentManage"
export default {

    namespace: 'Student',

    state: {
        classes: [],//分班
        StudentWithoutList:[],//没分班
        allStudent:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步
    effects: {
    //分班的学生
        *StudentList({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(StudentManage, payload)
            // console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upStudent',
                payload: data.data
            });
        },
    //没有分班的学生
        *StudentWithoutClasses({ payload }, { call, put }) { 
            let data = yield call(WithoutClasses, payload)
            // console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upStudentWithout',
                payload: data.data
            });
        },
         //删除学生
         *ScholasticDelete({ payload }, { call, put }) { 
            let data = yield call(StudentDelete, payload)
            // console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type:'StudentWithoutClasses'
            })
            yield put({
                type:'StudentList'
            })
        },
    },
    //同步
    reducers: {
        //分班
        upStudent(state, action) {
            // console.log(state.StudentWithoutList)
            return { ...state,classes:action.payload};
        },
        //没分班
        upStudentWithout(state, action) {
            return { ...state, StudentWithoutList:action.payload};
        },
    },

};

import { getGrade, getRoom, addGrade, deleteGrade, editGrade,addClassroom,delClassroom } from "../services/ClassManage"
export default {

    namespace: 'ClassManage',

    state: {
        grade: [],//展示所有班级
        room: [],//获取全部教室
        gradeInfo: 0//是否创建成功
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        //展示所有班级
        *getGrade({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(getGrade, payload)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'UpGrade',
                payload: data.data
            });
        },
        //获取全部教室
        *getRoom({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(getRoom, payload)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'UpRoom',
                payload: data.data
            });
        },
        //添加班级接口
        *addGrade({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(addGrade, payload)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'UpaddGrade',
                payload: data.data
            });
            //重新获取更新视图
            yield put({
                type: 'getGrade',
            });
        },
        //删除班级接口
        *deleteGrade({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(deleteGrade, payload)
            console.log(data)
            if (data.code === 0) {
                return
            };
            //重新获取更新视图
            yield put({
                type: 'getGrade',
            });
        },
        //编辑接口
        *editGrade({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(editGrade, payload)
            if (data.code === 0) {
                return
            };
            //重新获取更新视图
            yield put({
                type: 'getGrade',
            });
        },
        //添加教室
        *addClassroom({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(addClassroom, payload)
            if (data.code === 0) {
                return
            };
            //重新获取更新视图
            yield put({
                type: 'getRoom',
            });
        },
        //删除教室
        *delClassroom({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(delClassroom, payload)
            if (data.code === 0) {
                return
            };
            //重新获取更新视图
            yield put({
                type: 'getRoom',
            });
        },
    },

    reducers: {
        //展示所有班级
        UpGrade(state, action) {
            return { ...state, grade: action.payload };
        },
        //获取全部教室
        UpRoom(state, action) {
            return { ...state, room: action.payload };
        },
        //添加班级接口
        UpaddGrade(state, action) {
            return { ...state, gradeInfo: action.payload };
        },

    },

};

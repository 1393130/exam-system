import { MarkManage , batchList , batchPaper} from "../services/MarkManage"
export default {

    namespace: 'MarkManageList',

    state: {
        testList:[],
        allList:[],
        detail:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步
    effects: {
        //待批班级的学生
        *TestList({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(MarkManage, payload)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upTestList',
                payload: data.data
            });
        },
         //获取学生试卷列表
         *allBatchList({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(batchList, payload)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upBatchList',
                payload: data.exam
            });
        },
        //获取学生试卷列表
        *BatchDetail({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(batchPaper, payload)
            console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upDetail',
                payload: data.exam
            });
        },
    },
    //同步
    reducers: {
        upTestList(state, action) {
            return { ...state,testList:action.payload};
        },
        upBatchList(state, action) {
            return { ...state,allList:action.payload};
        },
        upDetail(state, action) {
            return { ...state,detail:action.payload};
        }
    },

};

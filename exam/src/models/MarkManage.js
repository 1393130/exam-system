import { MarkManage } from "../services/MarkManage"
export default {

    namespace: 'MarkManageList',

    state: {
        testList:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步
    effects: {
        //获取学生试卷列表
        *TestList({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(MarkManage, payload)
            console.log(data)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upTestList',
                payload: data.data
            });
        },
    },
    //同步
    reducers: {
        upTestList(state, action) {
            return { ...state,testList:action.payload};
        }
    },

};

import { getUserInfo } from "../services/getUserInfo"
export default {

    namespace: 'getUserInfo',

    state: {},

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *getUserInfo({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(getUserInfo)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upUserInfo',
                payload: data.data
            });
        },
        
    },

    reducers: {
        upUserInfo(state, action) {
            return { ...state, userInfo:action.payload };
        },
    },

};

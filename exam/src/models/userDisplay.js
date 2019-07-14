import { userDisplay } from "../services/userDisplay"
export default {

    namespace: 'userDisplay',

    state: {
        userDisplayInfo: []
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *userDisplay({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(userDisplay, payload)
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
            return { ...state, userDisplayInfo: action.payload };
        },
    },

};

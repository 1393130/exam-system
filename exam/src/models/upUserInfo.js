import { upUserInfo } from "../services/upUserInfo"
export default {

    namespace: 'upUserInfo',

    state: {
       
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *upUser({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(upUserInfo, payload)
            console.log(data)
        },
    },

    reducers: {
        
    },

};

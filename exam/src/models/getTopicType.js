import { getTopicType } from "../services/getTopicType"
export default {

    namespace: 'getTopicType',

    state: {},

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *getTopicType({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(getTopicType)
            if (data.code === 0) {
                return
            }
            yield put({
                type: 'upTopic',
                payload: data.data
            });
        },
    },

    reducers: {
        upTopic(state, action) {
            return { ...state, TopicType:action.payload };
        },
    },

};

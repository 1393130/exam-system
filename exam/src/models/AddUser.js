import { AddUsers , AddRankID , UpUser} from "../services/AddUser"
export default {

    namespace: 'AddUser',

    state: {
        rankid:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        //添加用户
        *AddUser({ payload }, { call, put }) {  // eslint-disable-line
            // console.log(payload);
            let data = yield call(AddUsers,payload)
            console.log(data)
        },
        //选择身份id
        *SelectRankId({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(AddRankID,payload)
            console.log(data)
            yield put({
                type: 'upSelectRank',
                payload: data.data
            });
        },
        //选择身份id
        *UpdateUser({ payload }, { call, put }) {
            let data = yield call(UpUser,payload)
            console.log(data)
            // yield put({
            //     type: 'ChangeUser',
            //     payload: data.data
            // });
        },
    },

    reducers: {
        upAddUser(state, action) {
            return { ...state, ...action.payload };
        },
        //选择身份id
        upSelectRank(state,action) {
            return {...state,rankid:action.payload}
        },
        //更新用户
        ChangeUser(state,action) {
            return {...state,rankid:action.payload}
        }
    },

};

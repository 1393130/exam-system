import { AddUsers , AddRankID , UpUser ,getView_authority,getApi_authority} from "../services/AddUser"
export default {

    namespace: 'AddUser',

    state: {
        rankid:[],//选择身份id
        View_authority:[],//视图权限信息
        Api_authority:[],//api接口权限数据
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
            yield put({
                type: 'upSelectRank',
                payload: data.data
            });
        },
        //更新用户
        *UpdateUser({ payload }, { call, put }) {
            let data = yield call(UpUser,payload)
            console.log(data)
            // yield put({
            //     type: 'ChangeUser',
            //     payload: data.data
            // });
        },
        //获取视图权限信息
        *getView_authority({ payload }, { call, put }) {  // eslint-disable-line
            //数据信息
            let data = yield call(getView_authority, payload)
            if(data===0){
                return 
            }
            yield put({
              type:"UpView_authority",
              payload:data.data
            })
        },
        //获取api接口权限数据
        *getApi_authority({ payload }, { call, put }) {  // eslint-disable-line
            //数据信息
            let data = yield call(getApi_authority, payload)
            console.log(data)
            if(data===0){
                return 
            }
            yield put({
              type:"UpApi_authority",
              payload:data.data
            })
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
        },
        UpView_authority(state, action) {
            return { ...state, View_authority:action.payload }
        },
        UpApi_authority(state, action) {
            return { ...state, Api_authority:action.payload }
        },
    },

};
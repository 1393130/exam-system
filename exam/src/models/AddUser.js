import { getView_authority,getApi_authority } from '../services/AddUser'
export default {

    namespace: 'AddUser',

    state: {
        View_authority:[],//视图权限信息
        Api_authority:[],//api接口权限数据
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步
    effects: {
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
    //同步
    reducers: {
        UpView_authority(state, action) {
            return { ...state, View_authority:action.payload }
        },
        UpApi_authority(state, action) {
            return { ...state, Api_authority:action.payload }
        },
    },

};
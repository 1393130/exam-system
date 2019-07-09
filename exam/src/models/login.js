import {login} from "../services/login"
export default {

    namespace: 'login',
  
    state: {
        isLogin:false
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },

    //异步
    effects: {
      *login({payload},{call,put}){
        let data = yield call(login, payload);
        yield put({
            type: 'upLogin',
            payload: data.code===1
          })
      }
    },
    
    //同步
    reducers: {
      upLogin(state, action) {
        return { ...state, isLogin:action.payload };
      },
    },
  
  };
  
import {AddClassify} from '../services/ClassifyQuestions/AddClassift'  
export default {

    namespace: 'AddClassify',
  
    state: {
        
    },
  
    // subscriptions: {
    //   setup({ dispatch, history }) {  // eslint-disable-line
    //   },
    // },
    //异步
    effects: {
      *AddClassify({ payload }, { call, put }) {  // eslint-disable-line
        //数据信息
        let data = yield call(AddClassify,payload)
        console.log(data)
        yield put({
          type:"upClassify",
          payload:data.data
        })
      },
    },
    //同步
    reducers: {
      upClassify(state, action) {
        return { ...state , ...action.payload}
      }
    },
  
  };
import {AddClassify} from '../services/ClassifyQuestions/AddClassift'  
export default {

    namespace: 'AddClassify',
  
    state: {
        
    },
  
    // subscriptions: {
    //   setup({ dispatch, history }) {  // eslint-disable-line
    //   },
    // },
  
    effects: {
      *AddClassify({ payload }, { call, put }) {  // eslint-disable-line
        let data = yield call(AddClassify,payload)
        console.log(data)
        yield put({
          type:"upClassify",
          payload:data.data
        })
      },
    },
  
    reducers: {
      upClassify(state, action) {
        return { ...state , ...action.payload}
      }
    },
  
  };
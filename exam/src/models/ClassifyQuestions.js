import { getClassify } from "../services/ClassifyQuestions/classify"
export default {

    namespace: 'getclassify',
  
    state: {
        list:[]
    },
  
    // subscriptions: {
    //   setup({ dispatch, history }) {  // eslint-disable-line
    //   },
    // },
  
    effects: {
      *getclassify({ payload }, { call, put }) {  // eslint-disable-line
        let data = yield call(getClassify,payload)
        console.log(data)
        yield put({
          type:"upClassify",
          payload:data.data
        })
      },
    },
  
    reducers: {
      upClassify(state, action) {
        return { ...state , list:action.payload}
      }
    },
  
  };
  
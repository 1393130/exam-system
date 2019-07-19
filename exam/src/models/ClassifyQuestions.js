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
    //异步
    effects: {
      *getclassify({ payload }, { call, put }) {  // eslint-disable-line
        //获取到的数据
        let data = yield call(getClassify,payload)
        // console.log(data)
        if(data.code === 1) {
          yield put({
            type:"upClassify",
            payload:data.data
          })
        }
      },
    },
    //同步
    reducers: {
      upClassify(state, action) {
        return { ...state , list:action.payload}
      }
    },
  
  };
  
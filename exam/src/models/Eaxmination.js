import { Examination , ExamiListDetail } from "../services/Examination"
export default {

    namespace: 'Examination',
  
    state: {
        list:[],
        detail:[]
    },
  
    // subscriptions: {
    //   setup({ dispatch, history }) {  // eslint-disable-line
    //   },
    // },
    //异步
    effects: {
      *EaxminAtions({ payload }, { call, put }) {  // eslint-disable-line
        //获取到的数据
        let data = yield call(Examination,payload)
        console.log(data)
          yield put({
            type:"upEaxminAtion",
            payload:data.exam
          })
      },
      //详情的数据
      *ExamDetail({ payload }, { call, put }) {  // eslint-disable-line
        let data = yield call(ExamiListDetail,payload)
        console.log(data)
        //   yield put({
        //     type:"upExam",
        //     payload:data.exam
        //   })
      },
    },
    //同步
    reducers: {
      upEaxminAtion(state, action) {
        return { ...state , list:action.payload}
      },
      upExam(state, action) {
      return { ...state , detail:action.payload}
    }
    },
  };
  
import { login } from "@/services/login"
import { setToken, getToken } from '@/utils/index'
import { routerRedux } from 'dva/router';
export default {

  namespace: 'login',

  state: {
    isLogin: -1
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        // 1.判断去的页面是否是登陆页面
        if (pathname.indexOf('/login') === -1) {
          // 1.1 判断是否有登陆态
          if (!getToken()) {
            // 1.1.1没有登陆态，利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: `/login`,
              search: `?redirect=${encodeURIComponent(pathname)}`
            }))
          }
          // 1.2用户没有登录态
        } else {
          // 1.2.1去登陆页面，如果已登陆跳回首页
          if (getToken()) {
            // 利用redux做路由跳转
            dispatch(routerRedux.replace({
              pathname: `/`,
            }))
          }
        }
      });
    },
  },

  //异步
  effects: {
    *login({ payload }, { call, put }) {
      let data = yield call(login, payload);
      if (data.code === 1) {
        setToken(data.token)
      }
      yield put({
        type: 'upLogin',
        payload: data.code
      })
    }
  },

  //同步
  reducers: {
    upLogin(state, action) {
      return { ...state, isLogin: action.payload };
    },
  },

};

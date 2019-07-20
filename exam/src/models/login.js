import { login, ViewAuthority } from "@/services/login"
import { getUserInfo } from '@/services/getUserInfo'
import { setToken, getToken } from '@/utils/index'
import { routerRedux } from 'dva/router';
import { upUserInfo } from "../services/upUserInfo"
import { getUserInfoAgin } from '../services/getUserInfo'// eslint-disable-line
import allAuthority from '../router/config'
export default {

  namespace: 'login',

  state: {
    isLogin: -1,//判断是否登录成功
    userInfo: {},//用户信息
    forbiddenView: [],
    myView: [],
  },

  // 订阅
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

        // 获取用户信息
        if (getToken()) {
          dispatch({
            type: 'getUserInfo'
          })
        }
      });
    },
  },

  //异步
  effects: {
    //登录
    *login({ payload }, { call, put }) {
      let data = yield call(login, payload);
      if (data.code === 1) {
        setToken(data.token)
      }
      yield put({
        type: 'upLogin',
        payload: data.code
      })
    },
    //获取用户信息
    * getUserInfo(action, { call, put, select }) {
      let userInfo = yield select(state => state.login.userInfo);
      if (Object.keys(userInfo).length) {
        return;
      }
      // console.log('userInfo...', userInfo);
      //获取用户信息
      let data = yield getUserInfo();
      yield put({
        type: 'updateUserInfo',
        payload: data.data
      })
      //获取用户权限
      let authority = yield ViewAuthority();
      console.log('authority...', authority);
      yield put({
        type: 'updateViewAuthority',
        payload: authority.data
      })
    },
    //更新数据
    *upUser({ payload }, { call, put }) {  // eslint-disable-line
      let data = yield call(upUserInfo, payload)
      // console.log(data)
      if (data.code === 1) {
        yield put({
          type: 'getUserInfoAgin'
        })
      }
    },
    *getUserInfoAgin({ payload }, { call, put }) {  // eslint-disable-line
      let data = yield call(getUserInfo)
      if (data.code === 0) {
        return
      }
      yield put({
        type: 'updateUserInfo',
        payload: data.data
      });
    },
  },


  //同步
  reducers: {
    upLogin(state, action) {
      return { ...state, isLogin: action.payload };
    },
    updateUserInfo(state, action) {
      return { ...state, userInfo: action.payload };
    },
    updateViewAuthority(state, action) {
      //分配出我拥有的权限
      let myView = [], forbiddenView = [];
      allAuthority.routes.forEach(item => {
        let obj = {
          name: item.name,
          children: []
        }
        item.children.forEach(value => {
          if (action.payload.findIndex(item => item.view_id === value.view_id) !== -1) {
            obj.children.push(value);
          } else {
            forbiddenView.push(value);
          }
        })
        myView.push(obj)
      })
      return { ...state, myView, forbiddenView }
    }
  },
};

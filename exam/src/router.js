import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import LoginPage from './pages/login/loginPage';
import TestHome from './pages/exam/TestHome'
import 'antd/dist/antd.css';
import {connect} from 'dva';

// 引入国际化
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zhCN from './lang/zh-CN.js';
import enUS from './lang/en-US.js';

// 配置国际化字典
const localMap = {
  en: enUS,
  zh: zhCN
}
addLocaleData([...en, ...zh]);


const mapStateToProps = state=>{
  return {
    locale: state.global.locale
  }
}
let RouterView = connect(mapStateToProps)((props)=>{
    return (
      <IntlProvider locale={props.locale} messages={localMap[props.locale]}>
        <Router history={props.history}>
          <Switch>
            <Redirect from="/" exact to="/home"/>
              <Route path="/home" component={TestHome} />
              <Route path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </IntlProvider>
    );
})

function RouterConfig({ history }) {
  return <RouterView history={history} />
}

export default RouterConfig;


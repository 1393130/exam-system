import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from './pages/login/loginPage';
import TestHome from './pages/exam/TestHome'
import 'antd/dist/antd.css';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');


function RouterConfig({ history }) {
  return (
  <LocaleProvider locale={zh_CN}>
    <Router history={history}>
      <Switch>
        <Route path="/home" component={TestHome} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
 </LocaleProvider>
  );
}

export default RouterConfig;

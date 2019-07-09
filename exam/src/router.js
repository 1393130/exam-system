import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from './pages/login/loginPage';
import TestHome from './pages/exam/TestHome'
import 'antd/dist/antd.css';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" component={TestHome} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

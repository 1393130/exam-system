import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/login/loginPage';
import TestHome  from './pages/exam/TestHome'
import 'antd/dist/antd.css';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={TestHome} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

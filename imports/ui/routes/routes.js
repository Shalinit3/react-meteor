import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Signup from '../pages/signup';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/signin" component={Login}/>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  </Router>
);
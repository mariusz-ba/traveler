import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import AuthRequiredRoute from './components/auth/AuthRequiredRoute';

import Home       from './pages/Home';
import Schedules  from './pages/schedules';
import Dashboard  from './pages/dashboard/Dashboard';
import Signin     from './pages/Signin';
import Signup     from './pages/Signup';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact  path="/"          component={Home}/>
            <Route        path="/schedules" component={Schedules}/>
            <Route        path="/signin"    component={Signin}/>
            <Route        path="/signup"    component={Signup}/>
            <AuthRequiredRoute path="/dashboard" component={Dashboard}/>
          </Switch>
      </Router>
    )
  }
}
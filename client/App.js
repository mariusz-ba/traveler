import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import AuthRequiredRoute from './components/auth/AuthRequiredRoute';

import About from './pages/About';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import Navbar from './components/navbar/Navbar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Navbar/>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <AuthRequiredRoute path="/dashboard" component={Dashboard}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
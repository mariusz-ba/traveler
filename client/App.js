import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import About from './pages/About';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import Navbar from './components/navbar/Navbar';
import Toolbar from './components/toolbar/Toolbar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Navbar/>
          <Toolbar/>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
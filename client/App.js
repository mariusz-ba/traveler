import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Components
import About from './pages/About';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </div>
      </Router>
    )
  }
}
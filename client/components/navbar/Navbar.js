import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="navbar-brand" to="/">Traveler</Link>
        <span className="navbar-brand-aside">Find the Route</span>
      </nav>
    )
  }
}
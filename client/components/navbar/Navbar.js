import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <span className="navbar__wprapper">
          <Link className="navbar__brand" to="/">Traveler</Link>
          <span className="navbar__description">Find the Route</span>
        </span>
        <ul className="navbar__menu">
          <li className="navbar__link"><Link to="/signin">Sign in</Link></li>
          <li className="navbar__link"><Link to="/signup">Sign up</Link></li>
        </ul>
      </nav>
    )
  }
}
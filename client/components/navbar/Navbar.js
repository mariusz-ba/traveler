import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="navbar-brand" to="/">Traveler</Link>
        <Link to="/carriers">Carriers List</Link>
        <Link to="/carriers/1">Carrier Timetable</Link>
      </nav>
    )
  }
}
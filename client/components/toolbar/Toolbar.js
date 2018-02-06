import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <ul>
          <li><Link to="/carriers">Carriers List</Link></li>
          <li><Link to="/carriers/1">Carrier Timetable</Link></li>
        </ul>
      </div>
    )
  }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LocalCarriers extends Component {
  render() {
    const listItem = (
      <li>
        <Link to="/" className="list-item">
          <div className="carrier-logo-container"></div>
          <div className="carrier-description">
            <h3 className="carrier-name">Travel</h3>
            <p className="carrier-stop">Najbliższy przystanek:</p>
          </div>
          <div className="carrier-directions">
            <p className="carrier-direction">KRK</p>
            <span className="carrier-direction-indicator-both">
              &#8691;
            </span>
            <p className="carrier-direction">DOB</p>
          </div>
        </Link>
      </li>
    )

    const items = new Array(10).fill(listItem);

    return (
      <div className="local-carriers">
        <ul>
          {
            items
          }
        </ul>
      </div>
    )
  }
}
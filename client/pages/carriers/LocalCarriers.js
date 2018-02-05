import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LocalCarriers extends Component {
  render() {
    return (
      <div className="local-carriers">
        <ul>
          <li>
            <Link to="/" className="list-item">
              <div className="carrier-logo-container"></div>
              <div className="carrier-description">
                <h3 className="carrier-name">Carrier name</h3>
                <p className="carrier-stop">Najbliższy przystanek:</p>
              </div>
              <div className="carrier-directions">
                <span className="carrier-direction">KRK</span>
                <span className="carrier-direction">DOB</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
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
            <p className="carrier-stop"><i class="fas fa-map-marker-alt"></i> Kraków ICE</p>
          </div>
          <div className="carrier-directions">
            <p className="carrier-direction">KRK</p>
            <i class="fas fa-arrows-alt-v"></i>
            <p className="carrier-direction">DOB</p>
          </div>
        </Link>
      </li>
    )

    return (
      <div className="local-carriers">
        <ul>
          { listItem }
        </ul>
      </div>
    )
  }
}
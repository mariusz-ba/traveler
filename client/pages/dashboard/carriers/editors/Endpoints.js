import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * **Endpoints** is a simple component that can be used
 * wherever endpoints edition is needed. Only one component
 * of this type should be displayed on the screen at the same
 * time.
 */
export default class Endpoints extends Component {

  static propTypes = {
    /** Array that endpoints are stored in */
    endpoints: PropTypes.array.isRequired,
    /** Stops that can be used as a helper options */
    stops: PropTypes.array.isRequired,
    /** Function that is invoked every time endpoints name is edited */
    onChangeName: PropTypes.func.isRequired,
    /** Function that is invoked every time endpoints stop is edited */
    onChangeStop: PropTypes.func.isRequired,
    /** Function that is invoked every time new endpoint is created */
    onCreateEndpoint: PropTypes.func.isRequired
  }

  // New endpoint has been created
  _onCreateEndpoint() {
    this.props.onCreateEndpoint();
  }

  // Endpoint name has changed
  _onChangeName(event, index) {
    this.props.onChangeName(index, event.target.value);
  }

  // Endpoint stop has changed
  _onChangeStop(event, index) {
    this.props.onChangeStop(index, event.target.value);
  }

  render() {
    const { endpoints, stops } = this.props;

    return (
      <div>
        <ul>
        {
          endpoints.map((endpoint, index) => (
            <li key={index}>
              <input 
                type="text"
                placeholder="Endpoint name"
                value={endpoint.name}
                onChange={(e) => this._onChangeName(e, index)}
              />
              <input 
                type="text"
                placeholder="Stop"
                list="endpoints"
                value={endpoint.stop}
                onChange={(e) => this._onChangeStop(e, index)}
              />
            </li>
          ))
        }
        </ul>
        <datalist id="endpoints">
        {
          stops.map(stop => (
            <option key={stop._id} value={stop._id}>{stop.name}</option>
          ))
        }
        </datalist>
        <button onClick={() => this._onCreateEndpoint()}>New Endpoint</button>
      </div>
    )
  }
}
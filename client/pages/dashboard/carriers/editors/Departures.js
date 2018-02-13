import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * **Departures** is a simple component that can be used
 * wherever timetable edition is needed.
 */
export default class Departures extends Component {

  static propTypes = {
    /** Where all departures are stored */
    timetable: PropTypes.array.isRequired,
    /** Array of endpoints */
    endpoints: PropTypes.array.isRequired,
    /** Function that is invoked every time new departure is created */
    onCreateDeparture: PropTypes.func.isRequired,
    /** Function that is invoked every time first endpoint is edited */
    onChangeFrom: PropTypes.func.isRequired,
    /** Function that is invoked every time second endpoint is edited */
    onChangeTo: PropTypes.func.isRequired,
    /** Function that is invoked every time departure time is edited */
    onChangeTime: PropTypes.func.isRequired
  }

  // New departure has been created
  _onCreateDeparture() {
    this.props.onCreateDeparture();
  }

  // First endpoint has hanged
  _onChangeFrom(event, index) {
    this.props.onChangeFrom(index, event.target.value);
  }

  // Second endpoint has hanged
  _onChangeTo(event, index) {
    this.props.onChangeTo(index, event.target.value);
  }

  // Departure time has hanged
  _onChangeTime(event, index) {
    this.props.onChangeTime(index, event.target.value);
  }

  render() {
    const { timetable, endpoints } = this.props;

    // Endpoints available in select box
    const endpointsOptions = endpoints.map((endpoint, index) => (
      <option key={index} value={index}>{endpoint.name}</option>
    ));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Departure Time</th>
            </tr>
          </thead>
          <tbody>
          {
            timetable.map((departure, index) => (
              <tr key={index}>
                <td> {/* From */}
                  <select
                    value={departure.from}
                    onChange={(e) => this._onChangeFrom(e, index)}>
                    <option disabled default value>From</option>
                    { endpointsOptions }
                  </select>
                </td>
                <td> {/* To */}
                  <select
                    value={departure.to}
                    onChange={(e) => this._onChangeTo(e, index)}>
                    <option disabled default value>To</option>
                    { endpointsOptions }
                  </select>
                </td>
                <td> {/* Time */}
                  <input 
                    type="text"
                    value={departure.departureTime}
                    onChange={(e) => this._onChangeTime(e, index)}/>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        <button onClick={() => this._onCreateDeparture()}>Create departure</button>
      </div>
    )
  }
}
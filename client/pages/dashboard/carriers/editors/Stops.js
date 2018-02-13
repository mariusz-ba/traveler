import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * **Stops** is a simple component that can be used
 * wherever carrier stops edition is needed.
 */
export default class Stops extends Component {

  static propTypes = {
    /** Array that stops are stored in */
    stops: PropTypes.array.isRequired,
    /** Stops that are available as a select options */
    stopsCache: PropTypes.array.isRequired,
    /** Function that is invoked every time new stop is added */
    onCreateStop: PropTypes.func.isRequired,
    /** Function that is invoked every time stop is removed from the list */
    onDeleteStop: PropTypes.func.isRequired,
    /** Function that is invoked every time a certain stop changes */
    onChangeStop: PropTypes.func.isRequired,
    /** Function that is invoked every time a move_up button is clicked */
    onMoveUp: PropTypes.func.isRequired,
    /** Function that is invoked every time a move_down button is clicked */
    onMoveDown: PropTypes.func.isRequired
  };

  // New stop has been created
  _onCreateStop() {
    this.props.onCreateStop();
  }

  // Stop has hanged
  _onChangeStop(event, index) {
    this.props.onChangeStop(index, event.target.value);
  }

  // Stop has been deleted
  _onDeleteStop(index) {
    this.props.onDeleteStop(index);
  }

  // Move up button clicked
  _onMoveUp(index) {
    this.props.onMoveUp(index);
  }

  // Move down button clicked
  _onMoveDown(index) {
    this.props.onMoveDown(index);
  }

  render() {
    const { stops, stopsCache } = this.props;

    // Stops available in select box
    const stopsOptions = stopsCache.map(stop => (
      <option key={stop._id} value={stop._id}>{stop.name}</option>
    ));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Stop</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              stops.map((stop, index) => (
                <tr key={index}>
                  <td>
                    <select
                      value={stop}
                      onChange={(e) => this._onChangeStop(e, index)}>
                      { stopsOptions }
                    </select>
                  </td>
                  <td>
                    <button onClick={() => this._onDeleteStop(index)}>Delete</button>
                    <button onClick={() => this._onMoveUp(index)}>&uarr;</button>
                    <button onClick={() => this._onMoveDown(index)}>&darr;</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <button onClick={() => this._onCreateStop()}>Add stop</button>
      </div>
    )
  }
}
import React, { Component } from 'react';
import axios from 'axios';

// Editors
import Endpoints from './editors/Endpoints';
import Departures from './editors/Departures';

export default class CarrierNew extends Component {
  state = {
    name: '',
    endpoints: [],
    timetable: [],
    stops: [],

    stopsHolder: []
  }

  // Endpoints handlers
  onCreateEndpoint = () => {
    const endpoints = this.state.endpoints.slice(0);
    endpoints.push({ name: '', stop: '' });

    this.setState({
      endpoints
    })
  }

  onChangeEndpointName = (index, name) => {
    const endpoints = this.state.endpoints.slice(0);
    endpoints[index].name = name;

    this.setState({
      endpoints
    })
  }

  onChangeEndpointStop = (index, stop) => {
    if(stop) {
      const endpoints = this.state.endpoints.slice(0);
      endpoints[index].stop = stop;

      this.setState({
        endpoints
      })
    }

    axios.get('/api/stops', { params: { name: stop }})
      .then(response => this.setState({ stopsHolder: response.data }))
      .catch(err => console.log('An error occurred: ', err));
  }

  // Timetable handlers
  onCreateDeparture = () => {
    const { endpoints } = this.state;
    const timetable = this.state.timetable.slice(0);
    timetable.push({ from: 0, to: 1, departureTime: '18:30' });

    this.setState({
      timetable
    })
  }

  onChangeDepartureFrom = (index, endpoint) => {
    const timetable = this.state.timetable.slice(0);
    timetable[index].from = endpoint;

    this.setState({
      timetable
    })
  }

  onChangeDepartureTo = (index, endpoint) => {
    const timetable = this.state.timetable.slice(0);
    timetable[index].to = endpoint;

    this.setState({
      timetable
    })
  }

  onChangeDepartureTime = (index, time) => {
    const timetable = this.state.timetable.slice(0);
    timetable[index].departureTime = time;

    this.setState({
      timetable
    })
  }

  // Stops handlers
  onChangeStop(e, index) {
    this.setState({
      stops: [
        ...this.state.stops.slice(0, index),
        e.target.value,
        ...this.state.stops.slice(index + 1)
      ]
    })
  }

  addStop = () => {
    this.setState({
      stops: [
        ...this.state.stops,
        ''
      ]
    })
  }

  onMoveStopUp(index) {

  }
  onMoveStopDown(index) {

  }
  deleteStop(index) {

  }

  render() {
    const { name, endpoints, timetable, stops } = this.state;

    return (
      <div className="newcarrier">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div> {/* Basic details */}
          <input 
            type="text" 
            placeholder="Name" 
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}/>
        </div>
        <Endpoints
          endpoints={endpoints}
          stops={this.state.stopsHolder}
          onCreateEndpoint={this.onCreateEndpoint}
          onChangeName={this.onChangeEndpointName}
          onChangeStop={this.onChangeEndpointStop}
        />
        <Departures
          timetable={timetable}
          endpoints={endpoints}
          onCreateDeparture={this.onCreateDeparture}
          onChangeFrom={this.onChangeDepartureFrom}
          onChangeTime={this.onChangeDepartureTime}
          onChangeTo={this.onChangeDepartureTo}
        />
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
                        onChange={(e) => this.onChangeStop(e, index)}
                      >
                        {
                          this.state.stopsHolder.map(stop => (
                            <option key={stop._id} value={stop._id}>{stop.name}</option>
                          ))
                        }
                      </select>
                    </td>
                    <td>
                      <button onClick={() => this.deleteStop(index)}>Delete</button>
                      <button onClick={() => this.onMoveStopUp(index)}>&uarr;</button>
                      <button onClick={() => this.onMoveStopDown(index)}>&darr;</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <button onClick={this.addStop}>Add stop</button>
        </div>
      </div>
    )
  }
}
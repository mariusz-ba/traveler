import React, { Component } from 'react';
import axios from 'axios';

// Editors
import Endpoints from './editors/Endpoints';

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

  onChangeDepartureFrom(e, index) {
    const timetable = this.state.timetable.slice(0);
    timetable[index].from = e.target.value;

    this.setState({
      timetable
    })
  }

  onChangeDepartureTo(e, index) {
    const timetable = this.state.timetable.slice(0);
    timetable[index].to = e.target.value;

    this.setState({
      timetable
    })
  }

  onChangeDepartureTime(e, index) {
    const timetable = this.state.timetable.slice(0);
    timetable[index].departureTime = e.target.value;

    this.setState({
      timetable
    })
  }

  moveDepartureUp(index) {
    if(index === 0) return;

    this.setState({
      timetable: [
        ...this.state.timetable.slice(0, index - 1),
        this.state.timetable[index],
        this.state.timetable[index - 1],
        ...this.state.timetable.slice(index + 1)
      ]
    })
  }

  moveDepartureDown(index) { 
    if(index === this.state.timetable.length - 1) return;

    this.setState({
      timetable: [
        ...this.state.timetable.slice(0, index),
        this.state.timetable[index + 1],
        this.state.timetable[index],
        ...this.state.timetable.slice(index + 2)
      ]
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
        {/* <div>
          <p>Endpoints</p>
          {
            endpoints.map((endpoint, index) => (
              <div key={index}>
                <input 
                  type="text" 
                  placeholder="Endpoint name" 
                  value={endpoint.name}
                  onChange={(e) => this.onChangeEndpointName(e, index)}/>
                <input 
                  type="text"
                  list={`endpoints`} 
                  value={endpoint.stop}
                  onChange={(e) => this.onChangeEndpointStop(e, index)}/>
              </div>
            ))
          }
          <datalist id={`endpoints`}>
            {
              this.state.stopsHolder.map(stop => (
                <option key={stop._id} value={stop._id}>{stop.name}</option>
              ))
            }
          </datalist>
          <button onClick={this.onCreateEndpoint}>New</button>
        </div> */}
        <div> {/* Timetable */}
          <p>Timetable</p>
          <table>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Departure Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {
                  timetable.map((departure, index) => (
                    <tr key={index}>
                      <td>
                        <select
                          value={departure.from}
                          onChange={(e) => this.onChangeDepartureFrom(e, index)}
                        >
                        <option disabled default value> -- from -- </option>
                        {
                          endpoints.map((endpoint, index) => (
                            <option key={index} value={index}>{endpoint.name}</option>
                          ))
                        }
                        </select>
                      </td>
                      <td>
                        <select
                          value={departure.to}
                          onChange={(e) => this.onChangeDepartureTo(e, index)}
                        >
                        <option disabled default value> -- to -- </option>
                        {
                          endpoints.map((endpoint, index) => (
                            <option key={index} value={index}>{endpoint.name}</option>
                          ))
                        }
                        </select>
                      </td>
                      <td>
                        <input 
                          type="text"
                          value={departure.departureTime}
                          onChange={(e) => this.onChangeDepartureTime(e, index)}
                        />
                      </td>
                      <td>
                        <button onClick={() => this.moveDepartureUp(index)}>&uarr;</button>
                        <button onClick={() => this.moveDepartureDown(index)}>&darr;</button>
                      </td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
          <button onClick={this.onCreateDeparture}>Add departure</button>
        </div>
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
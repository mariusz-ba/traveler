import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createCarrier } from '../../../actions/carriersActions';
import { pick } from 'lodash';
import axios from 'axios';

// Editors
import Endpoints from './editors/Endpoints';
import Departures from './editors/Departures';
import Stops from './editors/Stops';

class CarrierNew extends Component {
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
    timetable.push({ day: 1, from: 0, to: 1, departureTime: '18.30' });

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

  onChangeDepartureDay = (index, day) => {
    const timetable = this.state.timetable.slice(0);
    timetable[index].day = day;

    this.setState({
      timetable
    })
  }

  // Stops handlers
  onCreateStop = () => {
    this.setState({
      stops: [
        ...this.state.stops,
        this.state.stopsHolder[0]._id
      ]
    })
  }

  onDeleteStop = (index) => {
    this.setState({
      stops: [
        ...this.state.stops.slice(0, index),
        ...this.state.stops.slice(index + 1)
      ]
    })
  }

  onChangeStop = (index, stop)  =>{
    this.setState({
      stops: [
        ...this.state.stops.slice(0, index),
        stop,
        ...this.state.stops.slice(index + 1)
      ]
    })
  }

  onMoveStopUp = (index) => {
    if(index === 0) return;
    this.setState({
      stops: [
        ...this.state.stops.slice(0, index - 1),
        this.state.stops[index],
        this.state.stops[index - 1],
        ...this.state.stops.slice(index + 1)
      ]
    })
  }

  onMoveStopDown = (index) => {
    if(index === this.state.stops.length - 1) return;
    this.setState({
      stops: [
        ...this.state.stops.slice(0, index),
        this.state.stops[index + 1],
        this.state.stops[index],
        ...this.state.stops.slice(index + 2)
      ]
    })
  }

  // Creating carrier
  onCreateCarrier = () => {
    this.props.createCarrier(pick(this.state, ['name', 'stops', 'timetable', 'endpoints']));
  }

  render() {
    const { name, endpoints, timetable, stops, stopsHolder } = this.state;

    return (
      <div className="newcarrier">
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
          onChangeDay={this.onChangeDepartureDay}
        />
        <Stops
          stops={stops}
          stopsCache={stopsHolder}
          onCreateStop={this.onCreateStop}
          onDeleteStop={this.onDeleteStop}
          onChangeStop={this.onChangeStop}
          onMoveDown={this.onMoveStopDown}
          onMoveUp={this.onMoveStopUp}
        />
        <button onClick={this.onCreateCarrier}>Create Carrier</button>
      </div>
    )
  }
}

export default connect(null, { createCarrier })(CarrierNew);
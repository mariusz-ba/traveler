import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCarrier } from '../../actions/carriersActions';
import { fetchStops } from '../../actions/stopsActions';

import { uniqBy } from 'lodash';

class Schedules extends Component {
  state = {
    type: 'upcomming',
    direction: 0,
    day: 0
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCarrier(id)
      .then(() => this.props.fetchStops({ carrier: id }));
  }

  _onChangeType = (e) => {
    this.setState({ type: e.target.value });
  }

  _onChangeDirection = (e) => {
    this.setState({ direction: e.target.value });
  }

  _onChangeDay = (e) => {
    this.setState({ day: e.target.value });
  }

  _renderUpcomming = (carrier) => {
    const { direction } = this.state;

    return (
      <div className="schedule__upcomming">
        <div className="schedule__row">
          <select 
            className="schedule__direction"
            value={direction}
            onChange={this._onChangeDirection}>
            <option value={0}>{carrier.endpoints[0].name} - {carrier.endpoints[1].name}</option>
            <option value={1}>{carrier.endpoints[1].name} - {carrier.endpoints[0].name}</option>
          </select>
        </div>
        {
          // Calculate few closest departures from *direction*
        }
      </div>
    )
  }

  _renderSchedule = (carrier) => {
    const { direction, day } = this.state;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const departures = carrier.timetable.filter(departure => {
      if(day > 0 && day < 6) // week
        return departure.day > 0 && departure.day < 6 && departure.from == direction;
      return departure.day == day && departure.from == direction;
    })

    const hours = uniqBy(departures.map(departure => Math.floor(departure.departureTime)));
    const timetable = hours.map(hour => {
      const mins = departures.filter(departure => Math.floor(departure.departureTime) === hour)
                             .map(departure => Math.round((departure.departureTime - hour) * 100));
      return { hour, mins };
    })

    console.log(timetable);

    return (
      <div className="schedule__table">
        <div className="schedule__row">
          <select 
            className="schedule__direction"
            value={direction}
            onChange={this._onChangeDirection}>
            <option value={0}>{carrier.endpoints[0].name} - {carrier.endpoints[1].name}</option>
            <option value={1}>{carrier.endpoints[1].name} - {carrier.endpoints[0].name}</option>
          </select>
          <select 
            className="schedule__direction"
            value={day}
            onChange={this._onChangeDay}>
            {
              [0, 1, 2, 3, 4, 5, 6].map(day => (
                <option key={day} value={day}>{ days[day] }</option>
              ))
            }
          </select>
        </div>
        <div className="schedule__content">
          <table className="schedule__timetable">
            <tbody>
                {
                  timetable.map((departure, index) => (
                    <tr key={index}>
                      <td>{departure.hour}</td>
                      {departure.mins.map((min, index) => <td key={index}>{min}</td>)}
                    </tr>
                  ))
                }
            </tbody>
          </table>
        </div>
      </div>
    )
  }


  render() {
    const { id } = this.props.match.params;
    const carriers = this.props.carriers.items;
    const carrier = carriers[id];

    if(this.props.carriers.isFetching)
      return <p>Loading</p>

    if(!carrier)
      return <p>Not found</p>

    return (
      <div className="schedule">
        <h1>{ carrier.name }</h1>
        <select 
          className="schedule__type"
          value={this.state.type}
          onChange={this._onChangeType}>
          <option value="upcomming" default>Upcomming</option>
          <option value="schedule">Schedule</option>
        </select>
        { this.state.type === 'upcomming' ? this._renderUpcomming(carrier) : this._renderSchedule(carrier) }
      </div>
    )
  }
}

const mapStateToProps = ({ carriers, stops }) => (
  { carriers, stops }
);

export default withRouter(connect(
  mapStateToProps,
  { fetchCarrier, fetchStops }
)(Schedules));
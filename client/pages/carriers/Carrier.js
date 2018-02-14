import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCarrier } from '../../actions/carriersActions';
import { fetchStops } from '../../actions/stopsActions';
import { withRouter } from 'react-router-dom';
import { parseNumberToTime } from '../../utils/time';

class Carrier extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCarrier(id)
      .then(() => this.props.fetchStops({ carrier: id }))
      //.then(() => set markers on map )
      .catch(err => console.log('An error occurred.', error));
  }

  render() {
    const { id } = this.props.match.params;
    const { carriers } = this.props;
    const carrier = carriers.items[id];

    if(carriers.isFetching)
      return <p>Loading...</p>

    if(!carrier)
      return <p>No such carrier</p>

    const departures = [
      carrier.timetable.filter(departure => departure.day > 0 && departure.day< 6), // week
      carrier.timetable.filter(departure => departure.day === 6), // saturday
      carrier.timetable.filter(departure => departure.day === 0) // sunday
    ];

    const days = ['Week', 'Saturday', 'Sunday'];

    return (
      <div className="carrier-info">
        <div className="carrier-timetable">
          {
            departures
            .map((group, index) => (
              <div key={index}>
                <h3>{ days[index] }</h3>
                <table>
                  <thead>
                    <tr>
                      <th>From {carrier.endpoints[0].name}</th>
                      <th>From {carrier.endpoints[1].name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {
                          group
                          .filter(departure => departure.from === 0)
                          .map((departure, index) => (<div key={index}>{parseNumberToTime(departure.departureTime)}</div>))
                        }
                      </td>
                      <td>
                        {
                          group
                          .filter(departure => departure.from === 1)
                          .map((departure, index) => (<div key={index}>{parseNumberToTime(departure.departureTime)}</div>))
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ carriers, stops }) => ({ carriers, stops });

export default withRouter(connect(mapStateToProps, { fetchCarrier, fetchStops })(Carrier));
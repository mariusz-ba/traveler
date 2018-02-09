import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStops, deleteStop } from '../../../actions/stopsActions';
import { Link } from 'react-router-dom';

class StopsList extends Component {
  componentWillMount() {
    this.props.fetchStops();
  }
  
  render() {
    const { items } = this.props.stops;

    return (
      <div className="dashboard-stopslist">
        <div className="stopslist__actions">
          <Link className="btn" to="/dashboard/stops/new">New</Link>
        </div>
        <div className="stopslist__content">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Lat</th>
                <th>Lng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                Object.values(items).map(stop => (
                  <tr key={stop._id}>
                    <td>{stop.name}</td>
                    <td>{stop.lat}</td>
                    <td>{stop.lng}</td>
                    <td>
                      <button>Edit</button>
                      <button onClick={ () => this.props.deleteStop(stop._id) }>Remove</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ stops }) => ({ stops });

export default connect(mapStateToProps, { fetchStops, deleteStop })(StopsList);
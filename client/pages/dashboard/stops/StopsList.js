import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStops, deleteStop } from '../../../actions/stopsActions';
import { Link, withRouter } from 'react-router-dom';

class StopsList extends Component {
  componentWillMount() {
    this.props.fetchStops();
  }
  
  render() {
    const { items } = this.props.stops;

    return (
      <div className="stopslist">
        <div className="stopslist__actions">
          <Link className="btn" to="/dashboard/stops/new">New</Link>
        </div>
        <div className="stopslist__content">
          <table className="stopslist__table">
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
                      <button onClick={() => this.props.history.push(`/dashboard/stops/${stop._id}`)}>Browse</button>
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

export default withRouter(connect(mapStateToProps, { fetchStops, deleteStop })(StopsList));
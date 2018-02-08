import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStops } from '../../../actions/stopsActions';

class StopsList extends Component {
  componentWillMount() {
    this.props.fetchStops();
  }
  
  render() {
    return (
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
          <tr>
            <td>Kraków ICE</td>
            <td>50.8916216</td>
            <td>19.2316589</td>
            <td>
              <button>Edit</button>
              <button>Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ stops }) => ({ stops });

export default connect(mapStateToProps, { fetchStops })(StopsList);
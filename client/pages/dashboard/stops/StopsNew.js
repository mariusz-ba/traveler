import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStop } from '../../../actions/stopsActions';
import { pick } from 'lodash';

class StopsNew extends Component {
  state = {
    name: '',
    lat: 0,
    lng: 0
  }
  
  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  }

  onChangeLatitude = (e) => {
    this.setState({ lat: e.target.value });
  }

  onChangeLongitude = (e) => {
    this.setState({ lng: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createStop(pick(this.state, ['name', 'lat', 'lng']));
  }

  render() {
    const { name, lat, lng } = this.state;
    
    return (
      <div className="dashboard-stopdetails">
        <form>
          <input type="text" placeholder="Name" value={name} onChange={this.onChangeName}/>
          <input type="text" placeholder="Lat" value={lat} onChange={this.onChangeLatitude}/>
          <input type="text" placeholder="Lng" value={lng} onChange={this.onChangeLongitude}/>
          <button type="submit" onClick={this.onSubmit}>Create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ stops }) => ({ stops });

export default connect(mapStateToProps, { createStop })(StopsNew);
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
      <div className="newstop">
        <form className="newstop__form">
          <label>Name
          <input 
            className="newstop__form--name"
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={this.onChangeName}/></label>
          <label>Latitude
          <input 
            className="newstop__form--latitude"
            type="text" 
            placeholder="Lat" 
            value={lat} 
            onChange={this.onChangeLatitude}/></label>
          <label>Longitude
          <input 
            className="newstop__form--longitude"
            type="text" 
            placeholder="Lng" 
            value={lng} 
            onChange={this.onChangeLongitude}/></label>
          <button 
            className="newstop__form--submit"
            type="submit" 
            onClick={this.onSubmit}>Create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ stops }) => ({ stops });

export default connect(mapStateToProps, { createStop })(StopsNew);
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStop, updateStop } from '../../../actions/stopsActions';
import { withRouter } from 'react-router-dom';
import { pick } from 'lodash';

class Stop extends Component {
  state = {
    name: '',
    lat: 0,
    lng: 0
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchStop(id)
      .then(() => {
        this.setState({
          ...this.props.stops.items[id]
        })
      })
  }

  // Form input handlers
  onChangeName      = (e) => { this.setState({ name: e.target.value }) };
  onChangeLatitude  = (e) => { this.setState({ lat: e.target.value }) };
  onChangeLongitude = (e) => { this.setState({ lng: e.target.value }) };

  onSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const stop = pick(this.state, ['name', 'lat', 'lng']);
    this.props.updateStop(id, stop);
  }

  render() {
    const stop = this.props.stops.items[this.props.match.params.id];

    const { name, lat, lng } = this.state;

    return (
      <div className="stop__container">
        <div className="stop__name">{stop && stop.name}</div>
        <div className="stop__latitude">{stop && stop.lat}</div>
        <div className="stop__longitude">{stop && stop.lng}</div>

        <div className="stop__edit">
          <form className="stop__form">
            <input 
              type="text" 
              value={name} 
              onChange={this.onChangeName}/>
            <input 
              type="text" 
              value={lat} 
              onChange={this.onChangeLatitude}/>
            <input 
              type="text" 
              value={lng} 
              onChange={this.onChangeLongitude}/>
          </form>
          <button type="submit" onClick={this.onSubmit}>Update</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ stops }) => ({ stops });

export default withRouter(connect(mapStateToProps, { fetchStop, updateStop })(Stop));
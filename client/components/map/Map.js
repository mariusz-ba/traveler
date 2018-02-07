import React, { Component } from 'react';
import { connect } from 'react-redux';
import { centerMap } from '../../actions/mapActions';

class Map extends Component {

  componentDidMount() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        location => this.props.centerMap({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        })
      )
    }

    this.map = new google.maps.Map(this.node, { zoom: 2, center: this.props.map.center });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.map.center !== this.props.map.center) {
      // Center the map accordingly to new location
      const { lat, lng } = this.props.map.center;
      const center = new google.maps.LatLng(lat, lng);
      this.map.panTo(center);
    }
  }

  render() {
    return (
      <div ref={node => this.node = node} className="map">

      </div>
    )
  }
}

const mapStateToProps = ({ map }) => ({ map });

export default connect(mapStateToProps, { centerMap })(Map);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { centerMap } from '../../actions/mapActions';

class Map extends Component {

  componentDidMount() {
    // Load script from google maps api
    this.script = document.createElement('script');
    this.script.type = 'text/javascript';
    this.script.async = true;
    this.script.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDb7Y4wCbvgGbiTmP2z4ZPJBp01g2HvM1Y';
    this.script.onload = this.script.onreadystatechange = () => {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          location => this.props.centerMap({
            lat: location.coords.latitude,
            lng: location.coords.longitude
          })
        )
      }

      this.google = google;
      this.map = new google.maps.Map(this.node, { zoom: 2, center: this.props.map.center });
    } 
    // Add script to the DOM
    document.body.appendChild(this.script);
  }

  componentWillUnmount() {
    // Remove google script from DOM
    document.body.removeChild(this.script);
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
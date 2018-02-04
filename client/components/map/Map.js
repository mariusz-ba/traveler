import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 50.0646501,
        lng: 19.9449799
      },
      markers: [
        {lat: 50.0646501, lng: 19.9449799},
        {lat: 50.0646501, lng: 20.9449799}
      ]
    }

    this.markers = [];
  }

  componentDidMount() {
    this.script = document.createElement('script');
    this.script.type = 'text/javascript';
    this.script.async = true;
    this.script.src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDb7Y4wCbvgGbiTmP2z4ZPJBp01g2HvM1Y';
    this.script.onload = this.script.onreadystatechange = () => {
      const { currentLocation } = this.state;

      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          location => this.setState({
            currentLocation: {
              lat: location.coords.latitude,
              lng: location.coords.longitude
            }
          })
        )
      }

      this.google = google;
      this.map = new google.maps.Map(this.node, { zoom: 16, center: currentLocation });
    } 
    // Add script to the DOM
    document.body.appendChild(this.script);
  }

  componentWillUnmount() {
    // Remove google script from DOM
    document.body.removeChild(this.script);
  }

  componentWillUpdate() {
    const { markers } = this.state;
    this.clearOverlays();
    markers.forEach(marker => {
      this.markers.push(new google.maps.Marker({
        position: marker,
        map: this.map
      }))
    })
  }

  // Remove all markers from the map
  clearOverlays() {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers.length = 0;
  }

  render() {
    return (
      <div ref={node => this.node = node} className="map">

      </div>
    )
  }
}
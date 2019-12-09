import React, { Component } from 'react';
import GoogleMapReact from "google-map-react"
import recCenterData from "./data/data-austin.json"

const Marker = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.267153,
      lng: -97.743057
    },
    zoom: 16
  };

  render() {
    console.log(process.env.REACT_APP_GOOGLE_KEY)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }} 
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          loadingElement={<div style={{ height: "100%"}}/>}
          containerElement={<div style={{ height: "100%"}}/>}
          mapElement={<div style={{ height: "100%"}}/>}
        >
          <Marker
            lat={30.267153}
            lng={-97.743057}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
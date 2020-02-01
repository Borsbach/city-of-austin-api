import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MarkerIcon from "./images/icons8-marker-30.png";
import recCenterData from "./data/data-austin.json";

// const Marker = ({ text }) => <div>{text}</div>;

const Marker = () => <img alt="maker" src={MarkerIcon}></img>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.267153,
      lng: -97.743057
    },
    zoom: 13
  };

  render() {
    // console.log(process.env.REACT_APP_GOOGLE_KEY);
    // console.log(recCenterData);
    // console.log(this.props.latitude);
    // console.log(this.props.zip_code)
    // console.log(this.props.center);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        >
          {recCenterData.map(center => {
            console.log(center.location_1.longitude);
            return (
              <Marker
                key={center.center_id}
                // position={{
                  lat= {center.location_1.latitude}
                  lng= {center.location_1.longitude}
                // }}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;

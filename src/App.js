import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"
import * as recCenterData from "./data/data-austin.json"

function Map() {
  const [selectedCenter, setSelectedCenter] = useState(null)
  
  return (
    <GoogleMap 
    defaultZoom={10} 
    defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
    >
    {recCenterData.centers.map((center) => (
      <Marker 
      key={center.center_id}
      position={{ 
        lat: center.latitude,
        lng: center.longitude
      }}
      onClick={() => {
        console.log("button clicked")
        setSelectedCenter(center)
      }}
      />
      ))}

    {selectedCenter && (
      <InfoWindow
      position={{ 
        lat: selectedCenter.latitude,
        lng: selectedCenter.longitude
      }}
      onCloseClick={() => {
        setSelectedCenter(null)
      }}
      >
        <div>
          <h2>{selectedCenter.recreation_centers}</h2>
          <p>Phone number:{selectedCenter.phone_number}</p>
          <p>Zip Code: {selectedCenter.zip_code}</p>
        </div>
      </InfoWindow>
    )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh"}}>
      <WrappedMap 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`} 
      loadingElement={<div style={{ height: "100%"}}/>}
      containerElement={<div style={{ height: "100%"}}/>}
      mapElement={<div style={{ height: "100%"}}/>}
      />
    </div>
  );
}
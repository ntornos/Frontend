import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const mapContainerStyles = {
  position: 'sticky',
  // width: '38%',
  minHeight: '150px',
  margin: '5px 0',
};

const MapContainer = props => {
  return (
    <Map
      google={props.google}
      zoom={14}
      containerStyle={mapContainerStyles}
      initialCenter={props.latLng}
      center={props.latLng}
      style={mapStyles}>
      <Marker position={props.latLng} />
    </Map>
  );
};

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_PLACES_AUTOCOMPLETE_KEY })(
  MapContainer
);

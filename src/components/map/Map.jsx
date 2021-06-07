import React from 'react';
import { Map, GoogleApiWrapper, Marker, Polygon } from 'google-maps-react';

// const mapStyles = {
// width: '100%',
// height: '100%',
// };

const naco = [
  { lat: 18.4683654, lng: -69.9317385 },
  { lat: 18.4657168, lng: -69.9302784 },
  { lat: 18.4691076, lng: -69.9236341 },
  { lat: 18.4691255, lng: -69.9236041 },
  { lat: 18.4705365, lng: -69.9217536 },
  { lat: 18.4719667, lng: -69.9201636 },
  { lat: 18.4723851, lng: -69.9198928 },
  { lat: 18.4731794, lng: -69.919796 },
  { lat: 18.4745501, lng: -69.9202263 },
  { lat: 18.4753123, lng: -69.920406 },
  { lat: 18.4762532, lng: -69.9204483 },
  { lat: 18.4778431, lng: -69.9205361 },
  { lat: 18.4811467, lng: -69.9207295 },
  { lat: 18.4812586, lng: -69.920734 },
  { lat: 18.482141, lng: -69.9208543 },
  { lat: 18.4826212, lng: -69.9290253 },
  { lat: 18.4827416, lng: -69.9311036 },
  { lat: 18.4789339, lng: -69.9311826 },
  { lat: 18.4754753, lng: -69.9313498 },
  { lat: 18.4713345, lng: -69.931533 },
  { lat: 18.4708088, lng: -69.931552 },
  { lat: 18.4702816, lng: -69.9315895 },
  { lat: 18.4683654, lng: -69.9317385 },
];

const MapContainer = props => {
  return (
    <Map
      google={props.google}
      zoom={props.zoom}
      containerStyle={props.mapStyles}
      initialCenter={props.latLng}
      center={props.latLng}
      // style={mapStyles}
    >
      <Marker position={props.latLng} />
      <Polygon paths={naco} />
    </Map>
  );
};

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_PLACES_AUTOCOMPLETE_KEY })(
  MapContainer
);

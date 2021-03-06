import React from 'react';
import { StaticGoogleMap, Marker } from 'react-static-google-map';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const StaticMap = ({ latLng, setMapImage }) => {
  return (
    <StaticGoogleMap
      as={props => {
        return (
          <img
            id='imgUrl'
            onLoad={() => setMapImage(props.src)}
            {...props}
            style={mapStyles}
            alt='google static result img'
          />
        );
      }}
      zoom={15}
      apiKey={process.env.REACT_APP_GOOGLE_PLACES_AUTOCOMPLETE_KEY}
      size='800x400'
      region='DO'>
      <Marker location={latLng} />
    </StaticGoogleMap>
  );
};

export default StaticMap;

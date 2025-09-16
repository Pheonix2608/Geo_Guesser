import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: '300px',
  width: '400px',
};

const center = {
  lat: 0,
  lng: 0,
};

const Map = ({ actualLocation, guessLocation, setGuessLocation }) => {
  const onMapClick = (e) => {
    setGuessLocation({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={1}
      onClick={onMapClick}
    >
      {guessLocation && <Marker position={guessLocation} />}
      {actualLocation && guessLocation && (
        <Marker position={actualLocation} icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' }} />
      )}
    </GoogleMap>
  );
};

export default Map;

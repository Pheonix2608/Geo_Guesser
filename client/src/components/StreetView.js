import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, StreetViewPanorama } from '@react-google-maps/api';

const StreetView = ({ setActualLocation, round }) => {
  const [panorama, setPanorama] = useState(null);
  const [location, setLocation] = useState(null);

  const findRandomStreetViewLocation = useCallback(() => {
    // Reset location to show a loading state and remove the old panorama
    setLocation(null);

    const streetViewService = new window.google.maps.StreetViewService();
    let attempts = 0;
    const maxAttempts = 20;

    const findPanorama = () => {
      attempts++;
      if (attempts > maxAttempts) {
        console.error("Could not find a random Street View location after " + maxAttempts + " attempts.");
        // Fallback to a default location if no panorama is found
        const fallbackLocation = { lat: 40.7128, lng: -74.0060 };
        setLocation(fallbackLocation);
        setActualLocation(fallbackLocation);
        return;
      }

      // Generate random coordinates
      const randomLat = Math.random() * 180 - 90;
      const randomLng = Math.random() * 360 - 180;
      const randomLocation = { lat: randomLat, lng: randomLng };

      streetViewService.getPanorama(
        { location: randomLocation, radius: 50000, source: 'outdoor' },
        (data, status) => {
          if (status === 'OK') {
            const newLocation = data.location.latLng.toJSON();
            setLocation(newLocation);
            setActualLocation(newLocation);
          } else {
            // If no panorama is found, try again
            findPanorama();
          }
        }
      );
    };

    findPanorama();
  }, [setActualLocation]);

  useEffect(() => {
    // This effect runs when the component mounts and whenever the 'round' number changes
    findRandomStreetViewLocation();
  }, [round, findRandomStreetViewLocation]);

  const containerStyle = {
    height: '100vh',
    width: '100%',
  };

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location || { lat: 0, lng: 0 }}
        zoom={location ? 1 : 0}
        options={{
            disableDefaultUI: true,
            streetViewControl: false,
            fullscreenControl: false,
        }}
      >
        {location && (
          <StreetViewPanorama
            position={location}
            visible={true}
            onLoad={setPanorama}
            options={{
              disableDefaultUI: true,
              enableCloseButton: false,
              addressControl: false,
              linksControl: false,
              panControl: true,
              zoomControl: true,
            }}
          />
        )}
      </GoogleMap>
  );
};

export default StreetView;

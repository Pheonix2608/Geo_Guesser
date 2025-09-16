import React, { useState, useEffect } from 'react';
import { LoadScript } from '@react-google-maps/api';
import StreetView from './StreetView';
import Map from './Map';
import Scoreboard from './Scoreboard';
import '../App.css';

const libraries = ['places', 'geometry'];
// The API key is loaded from an environment variable.
// See the .env file in the client directory.
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const GameContent = () => {
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [distance, setDistance] = useState(null);
  const [actualLocation, setActualLocation] = useState(null);
  const [guessLocation, setGuessLocation] = useState(null);
  const [round, setRound] = useState(1);

  useEffect(() => {
    if (guessLocation && actualLocation) {
      const distanceInMeters = window.google.maps.geometry.spherical.computeDistanceBetween(
        new window.google.maps.LatLng(actualLocation),
        new window.google.maps.LatLng(guessLocation)
      );
      const distanceInKm = distanceInMeters / 1000;
      setDistance(distanceInKm);

      const newScore = Math.max(0, 5000 - Math.round(distanceInKm * 2));
      setScore(newScore);
      setTotalScore(totalScore + newScore);
    }
  }, [guessLocation, actualLocation]);

  const handleNextRound = () => {
    setRound(round + 1);
    setGuessLocation(null);
    setDistance(null);
    setScore(0);
  };

  return (
    <div className="game-container">
      <StreetView setActualLocation={setActualLocation} round={round} />
      <div className="map-container">
        <Map
          actualLocation={actualLocation}
          guessLocation={guessLocation}
          setGuessLocation={setGuessLocation}
        />
        <Scoreboard score={score} distance={distance} handleNextRound={handleNextRound} />
      </div>
    </div>
  );
}

const Game = () => {
  if (!apiKey) {
    return <div>Error: Google Maps API key is missing.</div>;
  }

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      libraries={libraries}
    >
      <GameContent />
    </LoadScript>
  );
};

export default Game;

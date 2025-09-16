import React from 'react';

const Scoreboard = ({ score, distance, handleNextRound }) => {
  return (
    <div className="scoreboard">
      <h2>Score: {score}</h2>
      {distance !== null && <h3>Distance: {distance.toFixed(2)} km</h3>}
      <button onClick={handleNextRound}>Next Round</button>
    </div>
  );
};

export default Scoreboard;

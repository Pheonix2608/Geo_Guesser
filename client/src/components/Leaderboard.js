import React from 'react';
import './Leaderboard.css';

const mockLeaderboard = [
  { rank: 1, name: 'Player1', score: 24500 },
  { rank: 2, name: 'GeoWizard', score: 24000 },
  { rank: 3, name: 'Mapper', score: 23500 },
  { rank: 4, name: 'GlobeTrotter', score: 22000 },
  { rank: 5, name: 'Puzzler', score: 21000 },
];

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <h2>Global Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {mockLeaderboard.map((player) => (
            <tr key={player.rank}>
              <td>{player.rank}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

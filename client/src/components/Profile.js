import React from 'react';
import './Profile.css';

const mockGames = [
  { id: 1, date: '2023-10-26', score: 18500 },
  { id: 2, date: '2023-10-25', score: 21000 },
  { id: 3, date: '2023-10-24', score: 15000 },
];

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>My Past Games</h2>
      <div className="games-list">
        {mockGames.map((game) => (
          <div key={game.id} className="game-card">
            <h3>Game on {game.date}</h3>
            <p>Final Score: {game.score}</p>
            <button className="btn-review">Review Game</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

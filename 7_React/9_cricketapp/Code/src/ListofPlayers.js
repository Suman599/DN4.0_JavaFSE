import React from 'react';

function ListofPlayers() {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 90 },
    { name: "Dhawan", score: 65 },
    { name: "Rahul", score: 72 },
    { name: "Pant", score: 50 },
    { name: "Jadeja", score: 60 },
    { name: "Ashwin", score: 78 },
    { name: "Shami", score: 40 },
    { name: "Bumrah", score: 95 },
    { name: "Iyer", score: 67 },
    { name: "Hardik", score: 88 },
  ];

  const filteredPlayers = players.filter(p => p.score < 70); 

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {filteredPlayers.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;

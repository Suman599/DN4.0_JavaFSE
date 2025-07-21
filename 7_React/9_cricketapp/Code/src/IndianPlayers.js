import React from 'react';

function IndianPlayers() {
  const oddTeam = ["Virat", "Dhawan", "Pant", "Ashwin", "Shami"];
  const evenTeam = ["Rohit", "Rahul", "Jadeja", "Iyer", "Bumrah", "Hardik"];

  const [odd1, odd2, odd3, odd4, odd5] = oddTeam;
  const [even1, even2, even3, even4, even5, even6] = evenTeam;

  const T20players = ["SKY", "Gill", "Axar"];
  const RanjiTrophy = ["Pujara", "Rahane", "Saha"];

  const allPlayers = [...T20players, ...RanjiTrophy]; 

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
        <li>{odd4}</li>
        <li>{odd5}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
        <li>{even4}</li>
        <li>{even5}</li>
        <li>{even6}</li>
      </ul>

      <h2>Merged Players (T20 + RanjiTrophy)</h2>
      <ul>
        {allPlayers.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;

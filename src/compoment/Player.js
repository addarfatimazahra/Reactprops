// src/Player.js
import React from 'react';

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-50 h-auto" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Équipe: {team}<br />
          Nationalité: {nationality}<br />
          Numéro de Maillot: {jerseyNumber}<br />
          Âge: {age}
        </p>
      </div>
    </div>
  );
};

Player.defaultProps = {
  name: "Inconnu",
  team: "Inconnu",
  nationality: "Inconnu",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/150"
};

export default Player;
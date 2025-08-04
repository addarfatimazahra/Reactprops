import React from "react";
import players from "../pages/players";
import Player from "./Player";

const PlayersList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};
export default PlayersList;
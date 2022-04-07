import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="text-center min-w-min">
      <h1 className="text-primary text-4xl md:text-6xl p-6 font-game">
        BATTLESHIP <div className="pt-7">GAME</div>
      </h1>
      <picture className="flex justify-center animate-pulse">
        <img src="./ship.png" alt="ship" width={260} />
      </picture>
      <Link
        className="text-primary font-bold text-lg bg-blue2-400 hover:bg-blue2-300 m-6 py-5 px-9 rounded-md"
        to="play"
      >
        PLAY
      </Link>
    </div>
  );
};

import React from "react";
import { Board } from "../Board";
import { Clue } from "../Clue";
import { GameResult } from "../GameResult";
import { TriesCounter } from "../TriesCounter";

export const Play = () => {
  return (
    <div>
      <div className="flex">
        <GameResult />
        <TriesCounter />
        <Clue />
      </div>
      <Board />
    </div>
  );
};

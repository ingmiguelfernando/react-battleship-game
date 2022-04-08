import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Board } from "../Board";
import { Clue } from "../Clue";
import { TriesCounter } from "../TriesCounter";

export const Play = () => {
  const { ships, tries } = useAppSelector((state) => state.game);

  console.log(ships);

  return (
    <div>
      <div className="flex">
        <TriesCounter />
        <Clue />
      </div>
      <Board />
    </div>
  );
};

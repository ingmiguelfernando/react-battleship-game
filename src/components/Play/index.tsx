import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Board } from "../Board";

export const Play = () => {
  const { ships, guesses } = useAppSelector((state) => state.game);

  console.log(ships);

  return (
    <div>
      <Board />
    </div>
  );
};

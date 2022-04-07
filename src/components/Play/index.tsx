import React from "react";
import { useAppSelector } from "../../app/hooks";
import { BoardSpace } from "../BoardSpace";

export const Play = () => {
  const { ships } = useAppSelector((state) => state.game);

  console.log(ships);

  return (
    <div>
      <span>this is a play screen</span>
      <BoardSpace key={1} />
      <BoardSpace key={2} />
      <BoardSpace key={3} />
      <BoardSpace key={4} />
      <BoardSpace key={5} />
    </div>
  );
};

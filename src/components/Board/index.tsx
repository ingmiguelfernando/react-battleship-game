import React from "react";
import { useAppSelector } from "../../app/hooks";
import { BoardSpace } from "../BoardSpace";

export const Board = () => {
  const { difficulty, ships } = useAppSelector((state) => state.game);

  const getBoard = () => {
    let content = [];

    for (let i = 0; i < difficulty; i++) {
      let row = [];
      for (let j = 0; j < difficulty; j++) {
        // key has the first name of ship to re-render when a game is reset
        row.push(<BoardSpace key={`${i}-${ships[0].name}-${j}`} x={j} y={i} />);
      }
      content.push(
        <div key={i} className="flex">
          {row}
        </div>
      );
    }
    return content;
  };

  return <div className="min-w-max">{getBoard()}</div>;
};

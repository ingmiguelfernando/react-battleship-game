import React from "react";
import { useAppSelector } from "../../app/hooks";
import { BoardSpace } from "../BoardSpace";

export const Board = () => {
  const { difficulty } = useAppSelector((state) => state.game);

  const getBoard = () => {
    let content = [];

    for (let i = 0; i < difficulty; i++) {
      let row = [];
      for (let j = 0; j < difficulty; j++) {
        row.push(<BoardSpace key={`${i}-${j}`} x={j} y={i} />);
      }
      content.push(
        <div key={i} className="flex">
          {row}
        </div>
      );
    }
    return content;
  };

  return <div>{getBoard()}</div>;
};

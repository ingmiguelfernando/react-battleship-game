import React, { useState, useMemo } from "react";
import Icons from "../Icon/sprite.svg";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { sunkCoordinate, updateTries, DIFFICULTIES } from "../../features/game/game-slice";

enum BOARD_SPACE_STATUS {
  INSPECTED = "inspected",
  SUNKEN = "sunken",
}

export type BoardSpaceProps = {
  x: number;
  y: number;
};

// This is function gives dynamic size to the board space according the difficulty and the size screen
const getWidthAndHeight = (difficulty: number) => {
  switch (difficulty) {
    case DIFFICULTIES.EASY:
      return "w-20 h-20 sm:w-16 sm:h-16";
    case DIFFICULTIES.MEDIUM:
      return "w-10 h-10 sm:w-14 sm:h-14";
    case DIFFICULTIES.HARD:
      return "w-7 h-7 sm:w-11 sm:h-11";
    default:
      return "";
  }
};

export const BoardSpace = ({ x, y }: BoardSpaceProps) => {
  const dispatch = useAppDispatch();
  const { ships, difficulty } = useAppSelector((state) => state.game);
  const [state, setState] = useState<string | undefined>(undefined);

  const handle = (): void => {
    if (!state) {
      let shipName = "";
      const hasShip = ships.some((ship) => {
        return ship.coordinates.some((coordinate) => {
          if (coordinate.x === x && coordinate.y === y) {
            shipName = ship.name;
            return true;
          }
          return false;
        });
      });
      setState(hasShip ? BOARD_SPACE_STATUS.SUNKEN : BOARD_SPACE_STATUS.INSPECTED);
      if (hasShip) {
        dispatch(sunkCoordinate({ shipName, coordinate: { x, y, onFire: true } }));
      }
      dispatch(updateTries({ x, y, onFire: false }));
    }
  };

  return (
    <div
      className={`${
        !state ? "cursor-help" : "cursor-not-allowed"
      } table border bg-blue2-400 rounded `}
      onClick={handle}
    >
      <svg
        // Using "useMemo" to avoid calling the function every time the component renders
        className={`icon-${state} ${useMemo(() => getWidthAndHeight(difficulty), [difficulty])}`}
      >
        <use xlinkHref={`${Icons}#${state}`} />
      </svg>
    </div>
  );
};

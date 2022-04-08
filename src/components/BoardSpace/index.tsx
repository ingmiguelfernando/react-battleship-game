import React, { useState } from "react";
import Icons from "../Icon/sprite.svg";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { sunkCoordinate, updateTries } from "../../features/game/game-slice";

enum BOARD_SPACE_STATUS {
  INSPECTED = "inspected",
  SUNKEN = "sunken",
}

export type BoardSpaceProps = {
  x: number;
  y: number;
};

export const BoardSpace = ({ x, y }: BoardSpaceProps) => {
  const dispatch = useAppDispatch();
  const ships = useAppSelector((state) => state.game.ships);
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
      <svg className={`icon-${state} w-7 h-7 sm:w-10 sm:h-10`}>
        <use xlinkHref={`${Icons}#${state}`} />
      </svg>
    </div>
  );
};

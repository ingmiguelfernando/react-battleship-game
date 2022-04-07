import React, { useState, useEffect } from "react";
import Icons from "../Icon/sprite.svg";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { sunkShip, updateGuesses } from "../../features/game/game-slice";

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

  useEffect(() => {
    if (!state) {
      const sunkShips = ships.filter((ship) => ship.inFlames);
      const isPartShip = sunkShips.some((ship) => {
        return ship.coordinates.some((coordinate) => {
          if (coordinate.x === x && coordinate.y === y) {
            return true;
          }
          return false;
        });
      });

      if (isPartShip) {
        setState(BOARD_SPACE_STATUS.SUNKEN);
      }
    }
  }, [ships, state, x, y]);

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
        dispatch(sunkShip(shipName));
      }
      dispatch(updateGuesses());
    }
  };

  return (
    <div
      className={`${x}-${y} table w-1 h-1 border bg-blue2-400 rounded cursor-help`}
      onClick={handle}
    >
      <svg className={`icon-${state}`} width={40} height={40}>
        <use xlinkHref={`${Icons}#${state}`} />
      </svg>
    </div>
  );
};

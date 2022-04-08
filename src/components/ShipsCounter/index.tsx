import React from "react";
import Icons from "../Icon/sprite.svg";
import { useAppSelector } from "../../app/hooks";

export const ShipsCounter = () => {
  const remainingShips = useAppSelector((state) => state.game.ships.filter((s) => !s.sunk).length);

  return (
    <div className="w-1/3 text-center font-gam">
      <div className="flex justify-center bg-gray-400">
        <svg className={"icon-ship w-6 h-6"}>
          <use xlinkHref={`${Icons}#ship`} />
        </svg>
      </div>
      <div className={"font-game bg-gray-100 py-2 border-2 border-gray-400 text-blue2-700"}>
        {remainingShips}
      </div>
    </div>
  );
};

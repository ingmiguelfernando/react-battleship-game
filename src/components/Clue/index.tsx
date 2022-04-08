import React from "react";
import { useAppSelector } from "../../app/hooks";
import { CLUES } from "../../features/game/game-slice";

export const Clue = () => {
  const clue = useAppSelector((state) => state.game.clue);

  const getClueColor = (): string => {
    switch (clue) {
      case CLUES.COLD:
        return "text-blue2-500";
      case CLUES.WARM:
        return "text-yellow-500";
      case CLUES.HOT:
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <div
      className={`flex justify-center items-center font-game border-2 border-gray-300 w-2/3 bg-gray-50 ${getClueColor()}`}
    >
      <div className="animate-pulse">{clue}</div>
    </div>
  );
};

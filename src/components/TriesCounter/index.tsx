import React from "react";
import { useAppSelector } from "../../app/hooks";

export const TriesCounter = () => {
  const { tries, maxTries } = useAppSelector((state) => state.game);
  const remainingTries = maxTries - tries;

  const getTriesColor = (): string => {
    // this value comes from 3/4 parts.
    const multiplier = 0.75;

    if (remainingTries <= 3) {
      return "text-red-600";
    }
    if (remainingTries <= maxTries * multiplier) {
      return "text-yellow-500";
    }
    return "text-green-400";
  };

  return (
    <div className="w-1/3 text-center font-game">
      <div className="bg-gray-400 text-xs py-1">tries</div>
      <div className={`bg-gray-100 py-2 border-2 border-gray-400 ${getTriesColor()}`}>
        {remainingTries}
      </div>
    </div>
  );
};

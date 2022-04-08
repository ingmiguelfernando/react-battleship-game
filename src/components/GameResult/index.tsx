import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { resetGame } from "../../features/game/game-slice";

export const GameResult = () => {
  const { isGameOver, won } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetGame());
  };

  return isGameOver ? (
    <div className="bg-opacity-75 bg-gray-600 flex justify-center pt-28 overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none">
      <div className="flex bg-gray-100 bg-opacity-80 rounded-lg border-4 border-blue-400 w-80 h-40 mx-auto  max-w-3xl text-center justify-center items-center">
        <div className="pt-4">
          <span className={`font-game animate-ping ${won ? "text-green-500" : "text-red-600"}`}>
            {won ? "you Win!!" : "you Lose!!"}
          </span>
          <button
            className="text-primary font-game text-xs bg-blue2-400 hover:bg-blue2-600 m-6 py-4 px-7 rounded-md"
            onClick={handleClick}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

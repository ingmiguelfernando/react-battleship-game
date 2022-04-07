import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getRandomShips } from "../../utilities";

export enum DIFFICULTIES {
  EASY = 4,
  MEDIUM = 8,
  HARD = 12,
}

export type Coordinate = {
  x: number;
  y: number;
};

export type Ship = {
  name: string;
  inFlames: boolean;
  coordinates: Coordinate[];
};

export type GameState = {
  difficulty: number;
  maxGuesses: number;
  guesses: number;
  shipLength: number;
  isGameOver: boolean;
  maxShips: number;
  ships: Ship[];
};

const initialState: GameState = {
  difficulty: DIFFICULTIES.EASY,
  maxGuesses: 20,
  guesses: 0,
  shipLength: 2,
  isGameOver: false,
  maxShips: 1,
  ships: getRandomShips(1, 2, DIFFICULTIES.EASY),
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    sunkShip: (state, action: PayloadAction<string>) => {
      const ship = state.ships.find((s) => s.name === action.payload);
      if (ship) {
        // it's okay to do this because immer makes it immutable
        // under the hood
        ship.inFlames = true;
      }
    },
    updateGuesses: (state) => {
      state.guesses += 1;
    },
  },
});

export const { sunkShip, updateGuesses } = gameSlice.actions;
export default gameSlice.reducer;

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
  maxTries: number;
  tries: number;
  shipLength: number;
  isGameOver: boolean;
  maxShips: number;
  ships: Ship[];
};

const initialState: GameState = {
  difficulty: DIFFICULTIES.MEDIUM,
  maxTries: 20,
  tries: 0,
  shipLength: 2,
  isGameOver: false,
  maxShips: 1,
  ships: getRandomShips(1, 2, DIFFICULTIES.MEDIUM),
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
      state.tries += 1;
    },
  },
});

export const { sunkShip, updateGuesses } = gameSlice.actions;
export default gameSlice.reducer;

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
  difficulty: DIFFICULTIES.MEDIUM,
  maxGuesses: 20,
  guesses: 0,
  shipLength: 2,
  isGameOver: false,
  maxShips: 2,
  ships: getRandomShips(2, 2, DIFFICULTIES.MEDIUM),
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    incremented(state) {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.guesses++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.difficulty += action.payload;
    },
    // decrement
    // reset
  },
});

export const { incremented, amountAdded } = gameSlice.actions;
export default gameSlice.reducer;

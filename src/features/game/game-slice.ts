import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getRandomShips, getClue } from "../../utilities";

export enum DIFFICULTIES {
  EASY = 4,
  MEDIUM = 8,
  HARD = 12,
}

export enum CLUES {
  HOT = "hot",
  WARM = "warm",
  COLD = "cold",
  READY = "ready",
}

export type Coordinate = {
  onFire: boolean;
  x: number;
  y: number;
};

export type Ship = {
  name: string;
  sunk: boolean;
  coordinates: Coordinate[];
};

type SunkCoordinateType = {
  shipName: string;
  coordinate: Coordinate;
};

export type GameState = {
  difficulty: number;
  maxTries: number;
  tries: number;
  shipLength: number;
  isGameOver: boolean;
  won: boolean;
  maxShips: number;
  clue: CLUES;
  ships: Ship[];
};

const getDefaultShips = (): Ship[] => getRandomShips(2, 2, DIFFICULTIES.MEDIUM);

const initialState: GameState = {
  difficulty: DIFFICULTIES.MEDIUM,
  clue: CLUES.READY,
  maxTries: 20,
  tries: 0,
  shipLength: 2,
  isGameOver: false,
  won: false,
  maxShips: 2,
  ships: getDefaultShips(),
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    sunkCoordinate: (state, action: PayloadAction<SunkCoordinateType>) => {
      const ship = state.ships.find((s) => s.name === action.payload.shipName);
      if (ship) {
        // it's okay to do this because immer makes it immutable
        // under the hood
        ship.coordinates = ship.coordinates.map((c) => {
          if (c.x === action.payload.coordinate.x && c.y === action.payload.coordinate.y) {
            return { ...c, onFire: true };
          }
          return c;
        });

        if (ship.coordinates.every((c) => c.onFire)) {
          ship.sunk = true;
        }
      }
    },
    updateTries: (state, action: PayloadAction<Coordinate>) => {
      const availableShipsCoordinates = state.ships.reduce((acc, ship) => {
        if (!ship.sunk) {
          acc = acc.concat(ship.coordinates);
        }
        return acc;
      }, [] as Coordinate[]);

      state.clue = getClue(action.payload, availableShipsCoordinates);
      state.tries += 1;

      // Validate if was reached max tries
      if (state.tries === state.maxTries) {
        state.isGameOver = true;
      }

      // Validate if all ships were sunk
      if (state.ships.every((ship) => ship.sunk)) {
        state.isGameOver = true;
        state.won = true;
      }
    },
    resetGame: () => ({ ...initialState, ships: getDefaultShips() }),
  },
});

export const { sunkCoordinate, updateTries, resetGame } = gameSlice.actions;
export default gameSlice.reducer;

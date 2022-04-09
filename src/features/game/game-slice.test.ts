import reducer, { GameState, CLUES, resetGame, sunkCoordinate, updateTries } from "./game-slice";

const gameInitialState = {
  difficulty: 8,
  clue: CLUES.READY,
  maxTries: 20,
  tries: 0,
  shipLength: 2,
  isGameOver: false,
  won: false,
  maxShips: 2,
};

test("should return the initial state", () => {
  expect(
    reducer(undefined, {
      type: undefined,
    })
  ).toMatchObject(gameInitialState);
});

test("should update sunk state when sunkCoordinate is called", () => {
  const previousState: GameState = {
    ...gameInitialState,
    ships: [{ name: "ship-1", sunk: false, coordinates: [{ x: 0, y: 0, onFire: false }] }],
  };

  const coordinateToSink = { shipName: "ship-1", coordinate: { x: 0, y: 0, onFire: false } };

  expect(reducer(previousState, sunkCoordinate(coordinateToSink))).toEqual({
    ...previousState,
    ships: [{ name: "ship-1", sunk: true, coordinates: [{ x: 0, y: 0, onFire: true }] }],
  });
});

test("should end the game when the final ship is sunk and update the tries property", () => {
  const previousState: GameState = {
    ...gameInitialState,
    ships: [{ name: "ship-1", sunk: false, coordinates: [{ x: 0, y: 0, onFire: false }] }],
  };

  const coordinateToSink = { shipName: "ship-1", coordinate: { x: 0, y: 0, onFire: false } };

  // sunk coordinate
  const sunkShipState = reducer(previousState, sunkCoordinate(coordinateToSink));

  const updatedState = reducer(sunkShipState, updateTries({ x: 0, y: 0, onFire: false }));

  expect(updatedState).toEqual({
    ...previousState,
    won: true,
    tries: 1,
    clue: CLUES.COLD,
    isGameOver: true,
    ships: [{ name: "ship-1", sunk: true, coordinates: [{ x: 0, y: 0, onFire: true }] }],
  });
});

test("should sunk a coordinate with no ship on it", () => {
  const previousState: GameState = {
    ...gameInitialState,
    ships: [{ name: "ship-1", sunk: false, coordinates: [{ x: 0, y: 0, onFire: false }] }],
  };

  const coordinateToSunk = { shipName: "ship-1", coordinate: { x: 7, y: 7, onFire: false } };

  // sunk coordinate
  const sunkShipState = reducer(previousState, sunkCoordinate(coordinateToSunk));
  const updatedState = reducer(sunkShipState, updateTries({ x: 7, y: 7, onFire: false }));

  expect(updatedState).toEqual({
    ...previousState,
    tries: 1,
    clue: CLUES.COLD,
    ships: [{ name: "ship-1", sunk: false, coordinates: [{ x: 0, y: 0, onFire: false }] }],
  });
});

test("should update trie with no ship inside", () => {
  const previousState: GameState = {
    ...gameInitialState,
    tries: 9,
    maxTries: 10,
    ships: [{ name: "ship-1", sunk: false, coordinates: [{ x: 0, y: 0, onFire: false }] }],
  };
  const updatedState = reducer(previousState, updateTries({ x: 1, y: 1, onFire: false }));

  expect(updatedState).toEqual({
    ...previousState,
    won: false,
    tries: 10,
    clue: CLUES.HOT,
    isGameOver: true,
    ships: [{ name: "ship-1", sunk: false, coordinates: [{ x: 0, y: 0, onFire: false }] }],
  });
});

test("should go to initial state when resetGame is called", () => {
  const previousState: GameState = {
    ...gameInitialState,
    ships: [{ name: "ship-1", sunk: false, coordinates: [{ x: 0, y: 0, onFire: false }] }],
  };

  const coordinateToSink = { shipName: "ship-1", coordinate: { x: 0, y: 0, onFire: false } };
  // sunk coordinate
  const sunkShipState = reducer(previousState, sunkCoordinate(coordinateToSink));

  expect(reducer(sunkShipState, resetGame())).toMatchObject({
    ...gameInitialState,
  });
});

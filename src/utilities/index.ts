import { Coordinate, Ship, DIFFICULTIES, CLUES } from "../features/game/game-slice";

enum DIRECTION {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export const getRandomShips = (
  quantity: number,
  shipLength: number,
  difficulty: DIFFICULTIES
): Ship[] => {
  const ships: Ship[] = [];
  for (let i = 0; i < quantity; i++) {
    ships.push(getRandomShip(shipLength, difficulty, `ship-${i}`));
  }
  return ships;
};

export const getRandomShip = (shipLength: number, difficulty: DIFFICULTIES, name: string): Ship => {
  const coordinates: Coordinate[] = [];
  const randomCoordinate = getRandomCoordinate(difficulty);
  coordinates.push(randomCoordinate);
  const direction = Math.random() < 0.5 ? DIRECTION.HORIZONTAL : DIRECTION.VERTICAL;
  let i = 1;
  while (i < shipLength) {
    if (direction === DIRECTION.VERTICAL) {
      coordinates.push({
        x: randomCoordinate.x,
        y: getCorrelatedCoordinate(difficulty, randomCoordinate.y, i),
        inFlames: false,
      });
    } else {
      coordinates.push({
        x: getCorrelatedCoordinate(difficulty, randomCoordinate.x, i),
        y: randomCoordinate.y,
        inFlames: false,
      });
    }
    i++;
  }
  return { name, coordinates, sunk: false };
};

export const getCorrelatedCoordinate = (
  difficulty: DIFFICULTIES,
  coordinate: number,
  currentLength: number
): number => {
  return coordinate + currentLength < difficulty
    ? coordinate + currentLength
    : coordinate - currentLength;
};

export const getRandomCoordinate = (difficulty: DIFFICULTIES): Coordinate => {
  const x = Math.floor(Math.random() * difficulty);
  const y = Math.floor(Math.random() * difficulty);
  return { x, y, inFlames: false };
};

// "hot" if they're 1 to 2 cells away, "warm" if they're 3 to 4 cells away, or "cold" if they're further away.
// As an example, `3,5` is three cells away from `2,7` because (3 - 2) + (7 - 5) = 3, so they'd be told they were "warm".
export const getClue = (coordinate: Coordinate, shipsCoordinates: Coordinate[]): CLUES => {
  const clues = {
    hot: 0,
    warm: 0,
    cold: 0,
  };

  shipsCoordinates.forEach((shipCoordinate) => {
    const xDiff = Math.abs(shipCoordinate.x - coordinate.x);
    const yDiff = Math.abs(shipCoordinate.y - coordinate.y);
    const distance = xDiff + yDiff;

    if (distance <= 2) {
      clues.hot++;
      return;
    }
    if (distance >= 3 && distance <= 4) {
      clues.warm++;
      return;
    }
    clues.cold++;
    return;
  });

  if (clues.hot > 0) {
    return CLUES.HOT;
  }
  if (clues.warm > 0) {
    return CLUES.WARM;
  }
  return CLUES.COLD;
};

import { Coordinate, Ship, DIFFICULTIES } from "../features/game/game-slice";

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
      });
    } else {
      coordinates.push({
        x: getCorrelatedCoordinate(difficulty, randomCoordinate.x, i),
        y: randomCoordinate.y,
      });
    }
    i++;
  }
  return { name, coordinates, inFlames: false };
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
  return { x, y };
};

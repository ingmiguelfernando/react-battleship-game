import "@testing-library/jest-dom/extend-expect";
import { cleanup, prettyFormat } from "@testing-library/react";
import { fireEvent, render, screen } from "../../utilities/test-utils";
import { BoardSpace } from "./index";
import { CLUES, DIFFICULTIES } from "../../features/game/game-slice";

describe("<BoardSpace />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const { container } = render(<BoardSpace x={0} y={0} />);
    expect(container).toBeInTheDocument();
  });

  it("should adjusts width and height when difficulty change", async () => {
    let { container } = render(<BoardSpace x={0} y={0} />, {
      preloadedState: { game: { difficulty: DIFFICULTIES.EASY } },
    });
    expect(container.getElementsByClassName("w-20 h-20 sm:w-16 sm:h-16").length).toBe(1);

    container = render(<BoardSpace x={0} y={0} />, {
      preloadedState: { game: { difficulty: DIFFICULTIES.MEDIUM } },
    }).container;
    expect(container.getElementsByClassName("w-10 h-10 sm:w-14 sm:h-14").length).toBe(1);

    container = render(<BoardSpace x={0} y={0} />, {
      preloadedState: { game: { difficulty: DIFFICULTIES.HARD } },
    }).container;
    expect(container.getElementsByClassName("w-7 h-7 sm:w-11 sm:h-11").length).toBe(1);

    container = render(<BoardSpace x={0} y={0} />, {
      preloadedState: { game: { difficulty: "" } },
    }).container;
    expect(container.getElementsByClassName("default").length).toBe(1);
  });

  it("should change icon when user sunk a ship", async () => {
    const { container } = render(<BoardSpace x={0} y={0} />);
    fireEvent.click(screen.getByTestId("board-space"));
    expect(container.getElementsByClassName("icon-inspected").length).toBe(1);
  });

  it("should change icon to 'icon-sunken' when user hit a ship", async () => {
    const gameInitialState = {
      difficulty: 8,
      clue: CLUES.READY,
      maxTries: 20,
      tries: 0,
      shipLength: 2,
      isGameOver: false,
      won: false,
      maxShips: 2,
      ships: [{ name: "ship-1", sunk: false, coordinates: [{ x: 0, y: 0, onFire: false }] }],
    };

    const { container } = render(<BoardSpace x={0} y={0} />, {
      preloadedState: { game: gameInitialState },
    });
    fireEvent.click(screen.getByTestId("board-space"));
    expect(container.getElementsByClassName("icon-sunken").length).toBe(1);
  });
});

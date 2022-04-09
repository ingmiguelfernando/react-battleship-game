import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "../../utilities/test-utils";
import { GameResult } from "./index";

describe("<GameResult />", () => {
  it("renders without crashing", () => {
    const { container } = render(<GameResult />);
    expect(container).toBeInTheDocument();
  });

  it("should render 'you Win!!' when 'isGameOver' if true and 'won' is true", async () => {
    render(<GameResult />, { preloadedState: { game: { isGameOver: true, won: true } } });
    expect(await screen.findByText("you Win!!")).toBeInTheDocument();
  });

  it("should render 'you Lose!!' when 'isGameOver' if true and 'won' is false", async () => {
    render(<GameResult />, { preloadedState: { game: { isGameOver: true, won: false } } });
    expect(await screen.findByText("you Lose!!")).toBeInTheDocument();
  });

  it("should reset game when 'Play Again' is clicked", async () => {
    render(<GameResult />, { preloadedState: { game: { isGameOver: true, won: true } } });
    fireEvent.click(screen.getByText("Play Again"));
    const button = screen.queryByText("Play Again");
    expect(button).not.toBeInTheDocument();
  });
});

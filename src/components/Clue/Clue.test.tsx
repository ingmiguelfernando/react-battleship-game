import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render, screen } from "../../utilities/test-utils";
import { Clue } from "./index";

describe("<Clue />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const { container } = render(<Clue />);
    expect(container).toBeInTheDocument();
  });

  it("should say 'ready' on first render", () => {
    render(<Clue />);
    expect(screen.getByText("ready")).toBeInTheDocument();
  });

  it("should say 'hot' on first render", async () => {
    render(<Clue />, { preloadedState: { game: { clue: "hot" } } });
    expect(await screen.findByText("hot")).toBeInTheDocument();
  });

  it("should say 'warm' on first render", async () => {
    render(<Clue />, { preloadedState: { game: { clue: "warm" } } });
    expect(await screen.findByText("warm")).toBeInTheDocument();
  });

  it("should say 'cold' on first render", async () => {
    render(<Clue />, { preloadedState: { game: { clue: "cold" } } });
    expect(await screen.findByText("cold")).toBeInTheDocument();
  });
});

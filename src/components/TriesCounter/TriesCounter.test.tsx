import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render, screen } from "../../utilities/test-utils";
import { TriesCounter } from "./index";

describe("<TriesCounter />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const { container } = render(<TriesCounter />);
    expect(container).toBeInTheDocument();
  });

  it("should say '20' (maxCountTries) on first render", () => {
    render(<TriesCounter />);
    expect(screen.getByText("20")).toBeInTheDocument();
  });

  it("should show number in green when remainingTries is less 3/4 parts of the opportunities", async () => {
    const { container } = render(<TriesCounter />, {
      preloadedState: { game: { maxTries: 20, tries: 1 } },
    });
    expect(container.getElementsByClassName("text-green-400").length).toBe(1);
  });

  it("should show number in yellow when remainingTries <= maxTries * (3/4 parts)", async () => {
    const { container } = render(<TriesCounter />, {
      preloadedState: { game: { maxTries: 20, tries: 10 } },
    });
    expect(container.getElementsByClassName("text-yellow-500").length).toBe(1);
  });

  it("should show number in red when remainingTries <= 3", async () => {
    const { container } = render(<TriesCounter />, {
      preloadedState: { game: { maxTries: 20, tries: 19 } },
    });
    expect(container.getElementsByClassName("text-red-600").length).toBe(1);
  });
});

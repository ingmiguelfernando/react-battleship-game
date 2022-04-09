import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render, screen } from "../../utilities/test-utils";
import { Play } from "./index";

describe("<Play />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const { container } = render(<Play />);
    expect(container).toBeInTheDocument();
  });

  it("should render 'TriesCounter' and 'ShipsCounter' and 'Clue' component", () => {
    render(<Play />);
    expect(screen.getByText("tries")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("ready")).toBeInTheDocument();
  });
});

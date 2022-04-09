import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render, screen } from "../../utilities/test-utils";
import { ShipsCounter } from "./index";

describe("<ShipsCounter />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const { container } = render(<ShipsCounter />);
    expect(container).toBeInTheDocument();
  });

  it("should say '2' (maxShips) on first render", () => {
    render(<ShipsCounter />);
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});

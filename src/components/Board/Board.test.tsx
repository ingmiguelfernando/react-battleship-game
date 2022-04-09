import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render } from "../../utilities/test-utils";
import { Board } from "./index";

describe("<Board />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const { container } = render(<Board />);
    expect(container).toBeInTheDocument();
  });
});

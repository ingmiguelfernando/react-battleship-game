import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "../../utilities/test-utils";
import { Home } from "./index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Play } from "../Play";

describe("<Home />", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="play" element={<Play />} />
        </Routes>
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });

  it("should redirect when 'Play Again' is clicked", async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="play" element={<Play />} />
        </Routes>
      </BrowserRouter>
    );
    fireEvent.click(getByText("PLAY"));

    expect(screen.queryByText("ready")).toBeInTheDocument();
  });
});

import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Search from "../Search";

describe("<Search />", () => {
  let setSearchTerm: jest.Mock;
  let input: HTMLElement;

  afterEach(cleanup);

  beforeEach(() => {
    setSearchTerm = jest.fn();
    const { getByPlaceholderText } = render(<Search setSearchTerm={setSearchTerm} />);
    input = getByPlaceholderText("Quick search...");
  });

  test("renders content", () => {
    expect(input).toBeInTheDocument();
  });

  test("updates search text on key press", () => {
    fireEvent.change(input, { target: { value: "hello" } });
    expect(setSearchTerm).toHaveBeenCalledWith("hello");
    expect(setSearchTerm).toHaveBeenCalledTimes(1);
  });
});

import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, waitForElementToBeRemoved, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Coin from "../Coin";
import axios from "axios";
import Router from "react-router-dom";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));
let mockedAxios = axios as jest.Mocked<typeof axios>;

const createWrapper = () => {
  return render(
    <BrowserRouter>
      <Coin />
    </BrowserRouter>
  );
};

describe("<Coin />", () => {
  const coin = {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    percent_change_1h: "10",
    percent_change_24h: "10",
    percent_change_7d: "10",
    volume_24h: "1588290024",
    price_usd: "10000",
    price_btc: "1",
    market_cap_usd: "1000000",
  };

  beforeEach(() => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "90" });
    mockedAxios.get.mockResolvedValue({ data: [coin] });
  });

  afterEach(cleanup);

  test("render component and show Loading... message", async () => {
    const { getByText } = createWrapper();
    expect(getByText("Loading...")).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i));
  });

  test("make an api request and render the result", async () => {
    const { getByText } = createWrapper();
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i));
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(getByText("Bitcoin")).toBeInTheDocument();
  });
});

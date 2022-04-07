import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CoinList from "../CoinList";
import ICoin from "../../Interfaces/ICoin";

describe("<CoinList />", () => {
  let coins: ICoin[];

  beforeEach(() => {
    coins = [
      {
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
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH",
        rank: 1,
        percent_change_1h: "-10",
        percent_change_24h: "10",
        percent_change_7d: "10",
        volume_24h: "1588290024",
        price_usd: "10000",
        price_btc: "1",
        market_cap_usd: "1000000",
      },
    ];
  });

  afterEach(cleanup);

  test("renders content", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CoinList coins={coins} />
      </BrowserRouter>
    );
    expect(getByText("Bitcoin")).toBeInTheDocument();
  });
});

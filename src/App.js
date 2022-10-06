import "./App.css";
import CurrencyMap from "./currency-map";

function App() {
  const currency = [
    {
      symbol: "bitcoin",
      code: "BTC",
      days: "15",
    },
    {
      symbol: "ripple",
      code: "XRP",
      days: "5",
    },
    {
      symbol: "litecoin",
      code: "LTC",
      days: "15",
    },
    {
      symbol: "ethereum",
      code: "ETH",
      days: "15",
    },
  ];

  return (
    <div className="App">
      <table>
        <tbody>
          {currency.map((curr) => {
            return (
              <CurrencyMap
                key={curr.code}
                symbol={curr.symbol}
                code={curr.code}
                days={curr.days}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

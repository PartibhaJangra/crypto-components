import CryptoMiniChart from "./crypto-minichart";

const CurrencyMap = ({ symbol, code, days }) => {
  return (
    <tr>
      <td>
        <h3>{code}</h3>
      </td>
      <td></td>
      <td>
        <CryptoMiniChart symbol={symbol} days={days} />
      </td>
    </tr>
  );
};

export default CurrencyMap;

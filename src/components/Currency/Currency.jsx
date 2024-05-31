import { useEffect, useState } from "react";
import s from "./Currency.module.css";
import fetchCurrency from "../../helpers/fetchCurrencyApi";
import CurrencyChart from "../CurrencyChart/CurrencyChart";

const Currency = () => {
  const [currency, setCurrency] = useState(
    JSON.parse(localStorage.getItem("currency")) || ""
  );
  useEffect(() => {
    const getData = async () => {
      const cachedCurrency = JSON.parse(localStorage.getItem("currency"));
      const now = Date.now();

      if (cachedCurrency && now - cachedCurrency.date < 3600000) {
        setCurrency(cachedCurrency);
      } else {
        try {
          const data = await fetchCurrency();
          const usd = data.find((item) => item.currencyCodeA === 840 && item.currencyCodeB === 980);
          const eur = data.find((item) => item.currencyCodeA === 978 && item.currencyCodeB === 980);

          const currencyData = {
            date: now,
            usd,
            eur
          };

          localStorage.setItem("currency", JSON.stringify(currencyData));
          setCurrency(currencyData);
        } catch (err) {
          console.error("Failed to fetch currency data:", err.message);
        }
      }
    };
    getData();
  }, []);

  return (<>
    {currency && (<div className={s.wrapper}>
      <table className={s.table}>
        <thead>
          <tr>
            <td>Currency</td>
            <td>Purchase</td>
            <td>Sale</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>{currency.usd.rateBuy.toFixed(2)}</td>
            <td>{currency.usd.rateSell.toFixed(2)}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{currency.eur.rateBuy.toFixed(2)}</td>
            <td>{currency.eur.rateSell.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <CurrencyChart usd={ currency.usd.rateBuy.toFixed(2)} eur={currency.eur.rateBuy.toFixed(2)} />
    </div>)
    }</>

  );
};

export default Currency;

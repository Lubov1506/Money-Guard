import { useEffect, useState } from "react";
import s from "./Currency.module.css";
import getCurrency from "../../helpers/getCurrencyApi";
const Currency = () => {
  const [currency, setCurrency] = useState(localStorage.getItem("currency"));
  useEffect(() => {
    const getData = async () => {
      const data = await getCurrency();

      console.log(data);
    };
    getData();
  }, []);
  
  return (
    <div className={s.wrapper}>
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
            <td>USD</td>
            <td>USD</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>EUR</td>
            <td>EUR</td>
          </tr>
        </tbody>
      </table>


    </div>
  );
};

export default Currency;

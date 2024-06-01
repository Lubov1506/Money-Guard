import { useEffect, useState } from 'react';
import s from './Currency.module.css';
import CurrencyChart from '../CurrencyChart/CurrencyChart';
import getCurrency from '../../helpers/fetchCurrencyApi';
import { useMedia } from '../../hooks/useMedia';

const Currency = () => {
  const [currency, setCurrency] = useState(
    () => JSON.parse(localStorage.getItem('currency')) || ''
  );
  useEffect(() => {
    const getData = async () => {
      const data = await getCurrency();
      setCurrency(data);
      console.log(data);
    };
    getData();
  }, []);
  const { isDesktop, isTablet } = useMedia();

  return (
    <>
      {currency && (
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
                <td>{currency.usd.buy}</td>
                <td>{currency.usd.sell}</td>
              </tr>
              <tr>
                <td>EUR</td>
                <td>{currency.eur.buy}</td>
                <td>{currency.eur.sell}</td>
              </tr>
            </tbody>
          </table>

          <CurrencyChart
            usd={currency.usd.buy}
            eur={currency.eur.buy}
            type={isDesktop ? 'desc' : isTablet ? 'tab' : 'mob'}
          />
        </div>
      )}
    </>
  );
};

export default Currency;

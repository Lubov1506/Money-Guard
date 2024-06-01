import { useEffect, useState } from 'react';
import s from './Currency.module.css';
import CurrencyChart from '../CurrencyChart/CurrencyChart';
import getCurrency from '../../helpers/fetchCurrencyApi';
import Loader from '../Loader/Loader';
import { useMedia } from '../../hooks/useMedia';

const Currency = () => {
  const [currency, setCurrency] = useState(
    () => JSON.parse(localStorage.getItem('currency')) || ''
  );
  useEffect(() => {
    const getData = async () => {
      const data = await getCurrency();
      setCurrency(data);
    };
    getData();
  }, []);
  const {isDesktop, isTablet} = useMedia()
  if (!currency) {
    return <Loader />;
  }
  return (
    <>
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

        <CurrencyChart
          usd={currency.usd.rateBuy.toFixed(2)}
          eur={currency.eur.rateBuy.toFixed(2)}
          type={isDesktop ? 'desc' : isTablet ? 'tab' : 'mob'}
        />
      </div>
    </>
  );
};

export default Currency;

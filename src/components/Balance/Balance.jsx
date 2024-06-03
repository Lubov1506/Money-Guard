import { useDispatch, useSelector } from 'react-redux';
// import { getBalanceThunk } from '../../redux/auth/operations';
// import { useEffect } from 'react';
import s from './Balance.module.css';
// import { useLocation } from 'react-router-dom';
import { getformatNumber } from 'helpers';
import { selectBalance } from '../../redux/auth/selectors';

const Balance = () => {
  // const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     dispatch(getBalanceThunk());
  //   }
  // }, [dispatch, location.pathname]);

  // if (location.pathname !== '/') {
  //   return null;
  // }

const formattedNumber = getformatNumber(balance);

  return (
    <div className={s.balance_container}>
      <p className={s.balance_label}>Your balance</p>
      <p className={s.balance_amount}>₴ {formattedNumber}</p>
    </div>
  );
};

export default Balance;

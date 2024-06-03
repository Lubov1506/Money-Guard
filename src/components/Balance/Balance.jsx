import { useSelector } from 'react-redux';
// import { getBalanceThunk } from '../../redux/auth/operations';
// import { useEffect } from 'react';
import s from './Balance.module.css';
// import { useLocation } from 'react-router-dom';
import { getformatNumber } from 'helpers';
import { selectBalance } from '../../redux/auth/selectors';
import clsx from 'clsx';

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
      <p className={clsx(s.balance_amount, balance < 0 && s.negative)}>
        {' '}
        ₴ {formattedNumber}{' '}
      </p>
    </div>
  );
};

export default Balance;

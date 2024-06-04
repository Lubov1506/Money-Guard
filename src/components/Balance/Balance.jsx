import { useSelector } from 'react-redux';
import s from './Balance.module.css';
import { selectBalance } from '../../redux/auth/selectors';
import clsx from 'clsx';
import prettyMoneyFormat from '../../constants/PrettyMoneyFormat';

const Balance = () => {
  const balance = useSelector(selectBalance);

  const formattedNumber = prettyMoneyFormat(balance);

  return (
    <div className={s.balance_container}>
      <p className={s.balance_label}>Your balance</p>
      <p className={clsx(s.balance_amount, balance < 0 && s.negative)}>
        <span className={s.sign}>₴</span> {formattedNumber}
      </p>
    </div>
  );
};

export default Balance;

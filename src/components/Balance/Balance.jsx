// import { useSelector } from 'react-redux';
import s from './Balance.module.css';
const Balance = () => {
  // const totalBalance = useSelector;
  // state => state.finance.totalBalance;
  return (
    <div className={s.balance_container}>
      <p className={s.balance_label}>Your balance</p>
      <p className={s.balance_amount}>₴{'24 000.00'}</p>
      {/* <p className={s.balance_amount}>₴{totalBalance}</p> */}
    </div>
  );
};

export default Balance;

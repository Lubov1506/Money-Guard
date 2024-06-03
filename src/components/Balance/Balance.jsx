import { useSelector } from 'react-redux';
import s from './Balance.module.css';
import { getformatNumber } from 'helpers';
// import { selectBalance } from '../../redux/auth/selectors';
import { selectPeriodTransactions } from '../../redux/transactions/selectors'; 
import clsx from 'clsx';

const Balance = () => {
  // const balance = useSelector(selectBalance);
  const transactions = useSelector(selectPeriodTransactions);
  const expenseTotal = transactions.expenseSummary || 0;
  const incomeTotal = transactions.incomeSummary || 0;
  const total = incomeTotal + expenseTotal;
  const balance = total ? total : 0;

  const formattedNumber = getformatNumber(balance);

  return (
    <div className={s.balance_container}>
      <p className={s.balance_label}>Your balance</p>
      <p className={clsx(s.balance_amount, balance < 0 && s.negative)}>
        ₴ {formattedNumber}
      </p>
    </div>
  );
};

export default Balance;

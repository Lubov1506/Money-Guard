import { useSelector } from 'react-redux';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import s from './StatisticsTable.module.css';
import { selectPeriodTransactions } from '../../redux/transactions/selectors';

export const StatisticsTable = () => {
  const transactions = useSelector(selectPeriodTransactions);
  console.log(transactions);

  const { expenseSummary, incomeSummary, categoriesSummary } = transactions;
  //   console.log({ expenseSummary, incomeSummary, categoriesSummary });

  console.log(expenseSummary);
  console.log(incomeSummary);
  console.log(categoriesSummary);

  return (
    <div className={s.all}>
      <table className={s.table}>
        <tr className={s.thread}>
          <th scope="col" className={s.th}>
            Category
          </th>
          <th scope="col" className={s.th}>
            Total
          </th>
        </tr>
        <tbody>
          {categoriesSummary
            ? categoriesSummary.map((item, idx) => (
                <StatisticsItem key={idx} item={item} />
              ))
            : null}
          {expenseSummary ? (
            <tr className={s.expences}>Expences: {expenseSummary}</tr>
          ) : null}
          {incomeSummary ? (
            <tr className={s.income}>Income: {incomeSummary}</tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

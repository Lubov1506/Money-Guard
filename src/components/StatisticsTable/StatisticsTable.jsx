import { useSelector } from 'react-redux';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import s from './StatisticsTable.module.css';
import { selectPeriodTransactions } from '../../redux/transactions/selectors';

const StatisticsTable = () => {
  const transactions = useSelector(selectPeriodTransactions);
  // console.log(transactions);

  const { expenseSummary, incomeSummary, categoriesSummary } = transactions;
  //   console.log({ expenseSummary, incomeSummary, categoriesSummary });

  // console.log(expenseSummary);
  // console.log(incomeSummary);
  // console.log(categoriesSummary);

  return (
    <div className={s.all}>
      <table className={s.table}>
<<<<<<< Updated upstream
        <thead className={s.thread}>
          <tr>
            <th scope="col" className={s.th}>
              Category
            </th>
            <th scope="col" className={s.th}>
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {categoriesSummary
            ? categoriesSummary.map((item, idx) => (
                <StatisticsItem key={idx} item={item} />
              ))
            : null}
          <tr className={s.expences}>
            <td> Expenses: {expenseSummary}</td>
          </tr>
          <tr className={s.income}>
            <td> Income: {incomeSummary}</td>
          </tr>
        </tbody>
=======
        <tr className={s.heading}>
          <th className={s.th}>Category</th>
          <th className={s.th}>Total</th>
        </tr>

        {categoriesSummary
          ? categoriesSummary.map((item, idx) => (
              <StatisticsItem key={idx} item={item} />
            ))
          : null}

        <tr className={s.expences}>
          <th className={s.exText}>Expences:</th>
          <th>{expenseSummary}</th>
        </tr>

        <tr className={s.income}>
          <th className={s.inText}>Income:</th>
          <th>{incomeSummary}</th>
        </tr>
>>>>>>> Stashed changes
      </table>
    </div>
  );
};
export default StatisticsTable;

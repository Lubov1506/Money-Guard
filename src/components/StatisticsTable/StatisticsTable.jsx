import { useSelector } from 'react-redux';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import s from './StatisticsTable.module.css';
import { selectPeriodTransactions } from '../../redux/transactions/selectors';
import prettyMoneyFormat from '../../constants/PrettyMoneyFormat';
import { getTrasactionCategoryColor } from '../../constants/TransactionConstants';

const StatisticsTable = () => {
  const transactions = useSelector(selectPeriodTransactions);
  console.log(transactions);
  const { expenseSummary, incomeSummary, categoriesSummary } = transactions;
  const data =
    categoriesSummary && categoriesSummary.length > 0
      ? categoriesSummary
          .map(item => {
            return {
              ...item,
              total: prettyMoneyFormat(item.total),
              color: getTrasactionCategoryColor(item.name),
            };
          })
          .filter(item => item.type === 'EXPENSE')
      : null;
  const incomeData =
    incomeSummary && incomeSummary >= 0
      ? prettyMoneyFormat(incomeSummary)
      : null;
  const expenseData = expenseSummary ? prettyMoneyFormat(expenseSummary) : null;

  console.log(data, incomeData, expenseData);

  if (data) {
    return (
      <div className={s.all}>
        <table className={s.table}>
          <thead className={s.heading}>
            <tr>
              <th className={s.category}>Category</th>
              <th className={s.sum}>Total</th>
            </tr>
          </thead>
          <tbody className={s.tableBody}>
            {data.map((item, idx) => (
              <StatisticsItem key={idx} item={item} />
            ))}
          </tbody>
          <tfoot className={s.tableFooter}>
            <tr className={s.expences}>
              <th className={s.exText}>Expences:</th>
              <th>{expenseData}</th>
            </tr>

            <tr className={s.income}>
              <th className={s.inText}>Income:</th>
              <th>{incomeData}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
  return null;
};
export default StatisticsTable;

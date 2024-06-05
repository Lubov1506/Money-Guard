import { useSelector } from 'react-redux';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import s from './StatisticsTable.module.css';
import { selectPeriodTransactions } from '../../redux/transactions/selectors';
import { prettyMoneyFormat } from 'helpers';
import { getTrasactionCategoryColor } from '../../constants/TransactionConstants';

const StatisticsTable = () => {
  const transactions = useSelector(selectPeriodTransactions);
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
    incomeSummary && incomeSummary >= 0 ? prettyMoneyFormat(incomeSummary) : 0;
  const expenseData = expenseSummary ? prettyMoneyFormat(expenseSummary) : 0;

  if (data) {
    return (
      <div className={s.all}>
        <table className={s.table}>
          <thead className={s.heading}>
            <tr>
              <th className={s.category}>Category</th>
              <th className={s.sum}>Sum</th>
            </tr>
          </thead>
        </table>
        <div className={s.divTable}>
          <table className={s.table}>
            <tbody className={s.scroll}>
              {data.map((item, idx) => (
                <StatisticsItem
                  key={idx}
                  item={item}
                  index={data.indexOf(item) + 1}
                />
              ))}
            </tbody>
            <tfoot className={s.tableFooter}>
              <tr className={s.expences}>
                <th className={s.stat_text}>Expences:</th>
                <th>{expenseData}</th>
              </tr>

              <tr className={s.income}>
                <th className={s.stat_text}>Income:</th>
                <th>{incomeData}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
  return null;
};
export default StatisticsTable;

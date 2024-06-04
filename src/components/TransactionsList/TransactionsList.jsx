import TransactionsDescItem from '../TransactionsDescItem/TransactionsDescItem';
import TransactionsMobileItem from '../TransactionsMobileItem/TransactionsMobileItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactions } from '../../redux/transactions/selectors';
import { useEffect } from 'react';
import { fetchAllTrnThunk } from '../../redux/transactions/operations';

import s from './TransactionsList.module.css';
import EmptyHistory from 'components/EmptyHistory/EmptyHistory';
import { useMedia } from 'hooks';

const TransactionsList = () => {
  const transactions = useSelector(selectTransactions).toSorted(
    (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrnThunk());
  }, [dispatch]);

  const { isTablet } = useMedia();
  if (!transactions.length) {
    return <EmptyHistory />;
  }
  return (
    <>
      {isTablet ? (
        <div className={s.general}>
          <table className={s.thead}>
            <thead>
              <tr className={s.t_row}>
                <th className={s.title}>Date</th>
                <th className={s.title}>Type</th>
                <th className={s.title}>Category</th>
                <th className={s.title}>Comment</th>
                <th className={s.title}>Sum</th>
                <th className={s.title}></th>
              </tr>
            </thead>
          </table>
          <div className={s.tbody_scroll}>
            <table className={s.tbody}>
              <tbody>
                {transactions.map(item => (
                  <TransactionsDescItem key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <ul className={s.list}>
          {transactions.map(item => (
            <TransactionsMobileItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TransactionsList;

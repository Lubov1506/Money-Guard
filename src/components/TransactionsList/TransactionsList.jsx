import TransactionsDescItem from '../TransactionsDescItem/TransactionsDescItem';
import TransactionsMobileItem from '../TransactionsMobileItem/TransactionsMobileItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactions } from '../../redux/transactions/selectors';
import { useEffect } from 'react';
import { fetchAllTrnThunk } from '../../redux/transactions/operations';
import s from './TransactionsList.module.css';
import EmptyHistory from 'components/EmptyHistory/EmptyHistory';
import { useMedia } from 'hooks';
import useDeleteToast from '../DeleteToast/DeleteToast';

const TransactionsList = () => {
  const transactions = useSelector(selectTransactions).toSorted(
    (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrnThunk());
  }, [dispatch]);

  const { isTablet } = useMedia();
  const { showDeleteToast, deletedIds } = useDeleteToast();

  const handleDelete = (transactionId, sum, comment) => {
    showDeleteToast(transactionId, sum, comment);
  };

  if (!transactions.length) {
    return <EmptyHistory />;
  }

  return (
    <>
      {isTablet ? (
        <table className={s.table}>
          <thead className={s.thead}>
            <tr className={s.t_row}>
              <th className={s.title}>Date</th>
              <th className={s.title}>Type</th>
              <th className={s.title}>Category</th>
              <th className={s.title}>Comment</th>
              <th className={s.title}>Sum</th>
              <th className={s.title}></th>
            </tr>
          </thead>
          <tbody className={s.tbody}>
            {transactions.map(item => (
              <TransactionsDescItem
                key={item.id}
                item={item}
                deletedIds={deletedIds}
                handleDelete={handleDelete}
                index={transactions.indexOf(item) + 1}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <ul className={s.list}>
          {transactions.map(item => (
            <TransactionsMobileItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              index={transactions.indexOf(item) + 1}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TransactionsList;

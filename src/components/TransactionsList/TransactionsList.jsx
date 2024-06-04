import TransactionsDescItem from '../TransactionsDescItem/TransactionsDescItem';
import TransactionsMobileItem from '../TransactionsMobileItem/TransactionsMobileItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactions } from '../../redux/transactions/selectors';
import { useEffect } from 'react';
import { fetchAllTrnThunk } from '../../redux/transactions/operations';
import s from './TransactionsList.module.css';
import EmptyHistory from 'components/EmptyHistory/EmptyHistory';
import { useMedia } from 'hooks';
import DeleteToast from '../DeleteToast/DeleteToast'


const TransactionsList = () => {
  const transactions = useSelector(selectTransactions).toSorted(
    (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrnThunk());
  }, [dispatch]);

  const { isTablet } = useMedia();
  const { showDeleteToast, deletedIds } = DeleteToast();

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
              <td className={s.title}>Date</td>
              <td className={s.title}>Type</td>
              <td className={s.title}>Category</td>
              <td className={s.title}>Comment</td>
              <td className={s.title}>Sum</td>
              <td className={s.title}></td>
            </tr>
          </thead>
          <tbody>
            {transactions.map(item => (
              <TransactionsDescItem
                key={item.id}
                item={item}
                deletedIds={deletedIds}
                handleDelete={handleDelete}
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
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TransactionsList;

import TransactionsDescItem from '../TransactionsDescItem/TransactionsDescItem';
import TransactionsMobileItem from '../TransactionsMobileItem/TransactionsMobileItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactions } from '../../redux/transactions/selectors';
import { useEffect } from 'react';
import { fetchAllTrnThunk } from '../../redux/transactions/operations';
import { useMedia } from '../../hooks/useMedia';
import s from './TransactionsList.module.css';

const TransactionsList = () => {
  const transactions = useSelector(selectTransactions);
  console.log(transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrnThunk());
  }, [dispatch]);

  const { isTablet } = useMedia();

  return (
    <>
      {isTablet ? (
        <table className={s.table}>
          <thead className={s.thead}>
            <tr className={`${s.t_row} ${s.t_row_header}`}>
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
              <TransactionsDescItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
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

import { useMediaQuery } from 'react-responsive';

import TransactionsDescItem from '../TransactionsDescItem/TransactionsDescItem';
import TransactionsMobileItem from '../TransactionsMobileItem/TransactionsMobileItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactions } from '../../redux/transactions/selectors';
import { useEffect } from 'react';
import { fetchAllTrnThunk } from '../../redux/transactions/operations';
import { useMedia } from '../../hooks/useMedia';

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
        <TransactionsDescItem transactions={transactions} />
      ) : (
        <TransactionsMobileItem transactions={transactions} />
      )}
    </>
  );
};

export default TransactionsList;

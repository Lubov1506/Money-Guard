import { useMediaQuery } from 'react-responsive';

import TransactionsDescItem from '../TransactionsDescItem/TransactionsDescItem';
import TransactionsMobileItem from '../TransactionsMobileItem/TransactionsMobileItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactions } from '../../redux/transactions/selectors';
import { useEffect } from 'react';
import { fetchAllTrnThunk } from '../../redux/transactions/operations';

const TransactionsList = () => {
  const transactions = useSelector(selectTransactions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrnThunk());
  }, [dispatch]);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <>
      {isDesktopOrLaptop ? (
        <TransactionsDescItem transactions={transactions} />
      ) : (
        <TransactionsMobileItem transactions={transactions} />
      )}
    </>
  );
};

export default TransactionsList;

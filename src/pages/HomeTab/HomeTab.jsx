import { CreateButton, TransactionsList } from 'components';
import s from './HomeTab.module.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {
  fetchAllTrnThunk,
  getCategoriesThunk,
} from '../../redux/transactions/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactions } from '../../redux/transactions/selectors';
import EmptyHistory from 'components/EmptyHistory/EmptyHistory';

const HomeTab = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(fetchAllTrnThunk());
  }, [dispatch]);
  const transactions = useSelector(selectTransactions).length;
  return (
    <>
      {transactions ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${s.div} ${s.scroll}`}
        >
          <TransactionsList />
        </motion.div>
      ) : (
        <EmptyHistory />
      )}
      <CreateButton />
    </>
  );
};

export default HomeTab;

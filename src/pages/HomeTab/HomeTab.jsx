import { CreateButton, TransactionsList } from 'components';
import s from './HomeTab.module.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { getCategoriesThunk } from '../../redux/transactions/operations';
import { useDispatch } from 'react-redux';

const HomeTab = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${s.div} ${s.scroll}`}
    >
      <TransactionsList />
      <CreateButton />
    </motion.div>
  );
};

export default HomeTab;

import { useEffect } from 'react';
import styles from './ModalAddTransaction.module.css';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import { motion } from 'framer-motion';
const ModalAddTransactionNew = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const addCloseEvent = event => {
      event.key === 'Escape' && closeModal();
    };
    document.addEventListener('keydown', addCloseEvent);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', addCloseEvent);
    };
  });

  const closeOnClickOutside = event => {
    event.target === event.currentTarget && closeModal();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.addModal}
      onClick={closeOnClickOutside}
    >
      <AddTransactionForm closeModal={closeModal} />
    </motion.div>
  );
};

export default ModalAddTransactionNew;

import { useEffect } from 'react';
import styles from './ModalAddTransaction.module.css';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';

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
    <>
      <div className={styles.addModal} onClick={closeOnClickOutside}>
        <AddTransactionForm closeModal={closeModal} />
      </div>
    </>
  );
};

export default ModalAddTransactionNew;

import CreateButton from '../CreateButton/CreateButton';
import TransactionsList from '../TransactionsList/TransactionsList';
import s from './HomeTab.module.css';

const HomeTab = () => {
  return (
    <div className={s.div}>
      <TransactionsList />
      <CreateButton />
    </div>
  );
};

export default HomeTab;

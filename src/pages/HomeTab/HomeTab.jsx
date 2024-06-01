import CreateButton from '../../components/CreateButton/CreateButton';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
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

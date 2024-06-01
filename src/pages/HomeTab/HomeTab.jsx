import { CreateButton, TransactionsList } from '../../components';
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

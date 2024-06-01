import { useDispatch } from 'react-redux';
import FormButton from '../common/FormButton/FormButton';
import s from './TransactionsDescItem.module.css';
import { GoPencil } from 'react-icons/go';
import { deleteTrnThunk } from '../../redux/transactions/operations';
import { getTransactionCategory } from '../../constants/TransactionConstants';

const TransactionsDescItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <tr className={s.t_row} key={item.id}>
      <td className={s.value}>{item.transactionDate}</td>
      <td className={s.value}>
        <span className={s.type}>{item.type}</span>
      </td>
      <td className={s.value}>{getTransactionCategory(item.categoryId)}</td>
      <td className={s.value}>{item.comment}</td>
      <td className={s.minus}>{item.amount}</td>
      <td className={`${s.value} ${s.value_end}`}>
        <button className={s.btn_edit}>
          <GoPencil />
        </button>

        <FormButton
          type="button"
          text="Delete"
          variant={'multiColorButtton'}
          width='100px'
          onClick={() => dispatch(deleteTrnThunk(item.id))}
        >
          Logout
        </FormButton>
      </td>
    </tr>
  );
};

export default TransactionsDescItem;

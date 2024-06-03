import { useDispatch } from 'react-redux';
import FormButton from '../common/FormButton/FormButton';
import s from './TransactionsDescItem.module.css';
import { GoPencil } from 'react-icons/go';
import { deleteTrnThunk } from '../../redux/transactions/operations';
import { getTransactionCategory } from '../../constants/TransactionConstants';
import { useOutletContext } from 'react-router-dom';
import clsx from 'clsx';

const TransactionsDescItem = ({ item }) => {
  const dispatch = useDispatch();
  const { openEditModal } = useOutletContext();
  return (
    <>
      <tr className={s.t_row} key={item.id}>
        <td className={s.value}>{item.transactionDate}</td>
        <td className={s.value}>{item.type}</td>
        <td className={s.value}>{getTransactionCategory(item.categoryId)}</td>
        <td className={s.value}>{item.comment}</td>
        <td
          className={clsx(
            s.value_strong,
            item.type === 'EXPENSE' ? s.minus : s.plus
          )}
        >
          {item.amount}
        </td>
        <td className={`${s.value} ${s.value_end}`}>
          <button
            onClick={() => {
              openEditModal(item);
            }}
            className={s.btn_edit}
          >
            <GoPencil />
          </button>
          <FormButton
            type="button"
            text="Delete"
            variant={'btn_delete'}
            handlerFunction={() => dispatch(deleteTrnThunk(item.id))}
          />
        </td>
      </tr>
    </>
  );
};

export default TransactionsDescItem;

import FormButton from '../common/FormButton/FormButton';
import s from './TransactionsDescItem.module.css';
import { GoPencil } from 'react-icons/go';
import { getTransactionCategory } from '../../constants/TransactionConstants';
import { useOutletContext } from 'react-router-dom';
import clsx from 'clsx';
import dateFormat from 'helpers/dateFormat';

const TransactionsDescItem = ({ deletedIds, item, handleDelete }) => {
  const { openEditModal } = useOutletContext();

  return (
    <>
      <tr className={s.t_row} key={item.id}>
        <td className={s.value}>{dateFormat(item.transactionDate)}</td>
        <td className={`${s.value} ${s.value_type}`}>
          {item.type === 'EXPENSE' ? '-' : '+'}
        </td>
        <td className={s.value}>{getTransactionCategory(item.categoryId)}</td>
        <td className={s.value}>{item.comment}</td>
        <td
          className={clsx(
            s.value_strong,
            item.type === 'EXPENSE' ? s.minus : s.plus
          )}
        >
          {Math.abs(item.amount).toFixed(2)}
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
            isDisabled={deletedIds.some(idFromArray => idFromArray === item.id)}
            handlerFunction={() =>
              handleDelete(item.id, item.amount, item.comment)
            }
          />
        </td>
      </tr>
    </>
  );
};

export default TransactionsDescItem;

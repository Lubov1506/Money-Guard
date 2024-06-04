import { useSelector } from 'react-redux';
import FormButton from '../common/FormButton/FormButton';
import s from './TransactionsDescItem.module.css';
import { GoPencil } from 'react-icons/go';
import { getTransactionCategory } from '../../constants/TransactionConstants';
import { useOutletContext } from 'react-router-dom';
import clsx from 'clsx';
import { selectCategories } from '../../redux/transactions/selectors';
import dateFormat from 'helpers/dateFormat';
import { prettyMoneyFormat } from 'helpers/prettyMoneyFormat';

const TransactionsDescItem = ({ deletedIds, item, handleDelete }) => {
  const { openEditModal } = useOutletContext();
  const categories = useSelector(selectCategories);

  return (
    <>
      <tr className={s.t_row} key={item.id}>
        <td className={s.value}>{dateFormat(item.transactionDate)}</td>

        <td className={`${s.value} ${s.value_type}`}>
          {item.type === 'EXPENSE' ? '-' : '+'}
        </td>
        <td className={s.value}>
          {getTransactionCategory(item.categoryId, categories)}
        </td>

        <td className={s.value}>{item.comment}</td>
        <td
          className={clsx(
            s.value_strong,
            item.type === 'EXPENSE' ? s.minus : s.plus
          )}
        >
          {prettyMoneyFormat(item.amount)}
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

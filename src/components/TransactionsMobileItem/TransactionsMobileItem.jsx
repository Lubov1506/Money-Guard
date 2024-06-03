import { useOutletContext } from 'react-router-dom';
import s from './TransactionsMobileItem.module.css';
import { GoPencil } from 'react-icons/go';
import FormButton from '../common/FormButton/FormButton';
import { getTransactionCategory } from '../../constants/TransactionConstants';
import { deleteTrnThunk } from '../../redux/transactions/operations';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const TransactionsMobileItem = ({ item = {} }) => {
  const dispatch = useDispatch();
  const { openEditModal } = useOutletContext();
  return (
    <li className={s.li}>
      <table   className={clsx(s.table, item.type === 'EXPENSE' ? s.table_minus : s.table_plus)}>
    
        <tbody className={s.tbody}>
          <tr className={s.t_row}>
            <td className={s.title}>Date</td>
            <td className={s.value}>{item.transactionDate}</td>
          </tr>
          <tr className={s.t_row}>
            <td className={s.title}>Type</td>
            <td className={s.value}>{item.type}</td>
          </tr>
          <tr className={s.t_row}>
            <td className={s.title}>Category</td>
            <td className={s.value}>
              {getTransactionCategory(item.categoryId)}
            </td>
          </tr>
          <tr className={s.t_row}>
            <td className={s.title}>Comment</td>
            <td className={s.value}>{item.comment}</td>
          </tr>
          <tr className={s.t_row}>
            <td className={s.title}>Sum</td>
            <td className={clsx(s.value_strong, item.type === 'EXPENSE' ? s.minus : s.plus)}>{item.amount}</td>
          </tr>
          <tr className={s.t_row}>
            <td className={s.title}>
              <FormButton
                type="button"
                text="Delete"
                variant={'btn_delete'}
                handlerFunction={() => dispatch(deleteTrnThunk(item.id))}
              />
            </td>
            <td className={s.value}>
              <button
                onClick={() => {
                  openEditModal(item);
                }}
                className={s.btn_edit}
              >
                <GoPencil /> Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

export default TransactionsMobileItem;

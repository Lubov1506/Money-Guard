import { useOutletContext } from 'react-router-dom';
import s from './TransactionsMobileItem.module.css';
import { GoPencil } from 'react-icons/go';
import FormButton from '../common/FormButton/FormButton';
import { getTransactionCategory } from '../../constants/TransactionConstants';
import {useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectCategories } from '../../redux/transactions/selectors';
import dateFormat from 'helpers/dateFormat';
import { prettyMoneyFormat } from 'helpers/prettyMoneyFormat';

const TransactionsMobileItem = ({ item = {}, handleDelete }) => {
const categories = useSelector(selectCategories);

  const { openEditModal } = useOutletContext();
  return (
    <li className={s.li}>
      <table
        className={clsx(
          s.table,
          item.type === 'EXPENSE' ? s.table_minus : s.table_plus
        )}
      >
        <tbody className={s.tbody}>
          <tr className={s.t_row}>
            <td className={s.title}>Date</td>
            <td className={s.value}>{dateFormat(item.transactionDate)}</td>
          </tr>
          <tr className={s.t_row}>
            <td className={s.title}>Type</td>
            <td className={s.value}>{item.type === 'EXPENSE' ? '-' : '+'}</td>
          </tr>
          <tr className={s.t_row}>
            <td className={s.title}>Category</td>
            <td className={s.value}>
              {getTransactionCategory(item.categoryId, categories)}
            </td>
          </tr>
          <tr className={s.t_row}>
            <td className={s.title}>Comment</td>
            <td className={s.value}>{item.comment}</td>
          </tr>
          <tr className={s.t_row}>
            <td className={s.title}>Sum</td>
            <td
              className={clsx(
                s.value_strong,
                item.type === 'EXPENSE' ? s.minus : s.plus
              )}
            >
              {prettyMoneyFormat(item.amount)}
            </td>
          </tr>
          <tr className={s.t_row}>
            <td className={s.title}>
              <FormButton
                type="button"
                text="Delete"
                variant={'btn_delete'}
               handlerFunction={() => handleDelete(item.id, item.amount, item.comment)}
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

import { useDispatch } from 'react-redux';
import FormButton from '../common/FormButton/FormButton';
import s from './TransactionsDescItem.module.css';
import { GoPencil } from 'react-icons/go';
import { deleteTrnThunk } from '../../redux/transactions/operations';
import { getTransactionCategory } from '../../constants/TransactionConstants';

const TransactionsDescItem = ({ transactions }) => {
  const dispatch = useDispatch();

  return (
    <table className={s.table}>
      <tbody className={s.tbody}>
        <tr className={`${s.t_row} ${s.t_row_header}`}>
          <td className={s.title}>Date</td>
          <td className={s.title}>Type</td>
          <td className={s.title}>Category</td>
          <td className={s.title}>Comment</td>
          <td className={s.title}>Sum</td>
          <td className={s.title}></td>
        </tr>

        {transactions.map(item => (
          <tr className={s.t_row} key={item.id}>
            <td className={s.value}>{item.transactionDate}</td>
            <td className={s.value}>
              <span className={s.type}>{item.type}</span>
            </td>
            <td className={s.value}>
              {getTransactionCategory(item.categoryId)}
            </td>
            <td className={s.value}>{item.comment}</td>
            <td className={s.minus}>{item.amount}</td>
            <td className={`${s.value} ${s.value_end}`}>
              <button className={s.btn_edit}>
                <GoPencil />
              </button>

              <FormButton
                type="button"
                variant={'multiColorButtton'}
                onClick={() => dispatch(deleteTrnThunk(item.id))}
              >
                Logout
              </FormButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsDescItem;

import s from './TransactionsMobileItem.module.css';
import { GoPencil } from 'react-icons/go';

const TransactionsMobileItem = ({ item = [] }) => {
  return (
    <>

        <table className={s.table} key={item.id}>
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
              <td className={s.value}>{item.categoryId}</td>
            </tr>
            <tr className={s.t_row}>
              <td className={s.title}>Comment</td>
              <td className={s.value}>{item.comment}</td>
            </tr>
            <tr className={s.t_row}>
              <td className={s.title}>Sum</td>
              <td className={s.minus}>{item.amount}</td>
            </tr>
            <tr className={s.t_row}>
              <td>
                <button className={s.btn_delete}>Delete</button>
              </td>
              <td className={s.value}>
                <button className={s.btn_edit}>
                  <GoPencil /> Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>

    </>
  );
};

export default TransactionsMobileItem;

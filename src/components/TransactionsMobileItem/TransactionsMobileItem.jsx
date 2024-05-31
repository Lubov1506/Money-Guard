import s from "./TransactionsMobileItem.module.css";
import { GoPencil } from "react-icons/go";

const TransactionsItem = () => {
  return (
    <table className={s.table}>
      <tbody className={s.tbody}>
        <tr className={s.t_row}>
          <td className={s.title}>Date</td>
          <td className={s.value}>04.01.23</td>
        </tr>
        <tr className={s.t_row}>
          <td className={s.title}>Type</td>
          <td className={s.value}>-</td>
        </tr>
        <tr className={s.t_row}>
          <td className={s.title}>Category</td>
          <td className={s.value}>Other</td>
        </tr>
        <tr className={s.t_row}>
          <td className={s.title}>Comment</td>
          <td className={s.value}>Gift for your wife</td>
        </tr>
        <tr className={s.t_row}>
          <td className={s.title}>Sum</td>
          <td className={s.sum}>300.00</td>
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
  );
};

export default TransactionsItem;

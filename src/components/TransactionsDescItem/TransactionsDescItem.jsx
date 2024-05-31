import s from "./TransactionsDescItem.module.css";
import { GoPencil } from "react-icons/go";

const TransactionsDescItem = () => {
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
        <tr className={s.t_row}>
          <td className={s.value}>04.01.23</td>
          <td className={s.value}>
            <span className={s.type}>-</span>
          </td>
          <td className={s.value}>Other</td>
          <td className={s.value}>Gift for your wife</td>
          <td className={s.minus}>300.00</td>
          <td className={`${s.value} ${s.value_end}`}>
            <button className={s.btn_edit}>
              <GoPencil />
            </button>

            <button className={s.btn_delete}>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionsDescItem;

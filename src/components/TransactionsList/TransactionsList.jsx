import { Container } from "../Container/Container";
import { GoPencil } from "react-icons/go";
import s from "./TransactionsList.module.css";

const TransactionsList = () => {
  return (
    <Container>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.thead_title}>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th>
              <button className={s.btn}>Delete</button>
            </th>
          </tr>
        </thead>

        <tbody className={s.tbody}>
          <tr className={s.tbody_text}>
            <td>04.01.23</td>
            <td>-</td>
            <td>Other</td>
            <td>Gift for your wife</td>
            <td className={s.tbody_text_sum}>300.00</td>
            <td>
              <button className={s.btn_edit}>
                <GoPencil /> Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsList;

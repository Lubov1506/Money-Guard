import s from './StatisticsItem.module.css';
const StatisticsItem = ({ item }) => {
  return (
    <tr className={s.item}>
      <th scope="row" className={s.row}>
        <td className={s.td}>
          <span className={s.color}></span>
        </td>
        <td className={s.name}>{item.name}</td>

        <td className={s.td}>{item.total}</td>
      </th>
    </tr>
  );
};
export default StatisticsItem;

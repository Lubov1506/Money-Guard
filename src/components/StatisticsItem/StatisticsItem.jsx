import s from './StatisticsItem.module.css';
const StatisticsItem = ({ item }) => {
  return (
    <tr scope="row" className={s.row}>
      <td>
        <span className={s.color}></span>
      </td>
      <td>{item.name}</td>
      <td>{item.total}</td>
    </tr>
  );
};
export default StatisticsItem;

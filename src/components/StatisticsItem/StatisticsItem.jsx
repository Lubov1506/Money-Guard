import s from './StatisticsItem.module.css';
const StatisticsItem = ({ item }) => {
  return (
    <tr className={s.row}>
      <td className={s.name}>
        <span
          className={s.color}
          style={{
            backgroundColor: item.color,
          }}
        ></span>
        {item.name}
      </td>
      <td className={s.total}>{item.total}</td>
    </tr>
  );
};
export default StatisticsItem;

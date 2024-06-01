import s from './StatisticsItem.module.css';
export const StatisticsItem = ({ item, idx }) => {
  return (
    <tr key={idx}>
      <th scope="row" className={s.row}>
        <td>
          <span className={s.color}></span>
        </td>
        <td>{item.name}</td>
        <td>{item.total}</td>
      </th>
    </tr>
  );
};

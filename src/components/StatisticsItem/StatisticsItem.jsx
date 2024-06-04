import s from './StatisticsItem.module.css';
import { motion } from 'framer-motion';
const StatisticsItem = ({ item, index }) => {
  return (
    <motion.tr
      className={s.row}
      transition={{ delay: 0.2 * index }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      key={Date.now()}
    >
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
    </motion.tr>
  );
};
export default StatisticsItem;

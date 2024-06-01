import { DoughnutChart } from '../../components';
import { StatisticDatePicker } from '../../components/StatisticsDashboard/StatisticDatePicker';
import { StatisticsTable } from '../../components/StatisticsTable/StatisticsTable';
import s from './StatisticsTab.module.css';

const StatisticsTab = () => {
  return (
    <div className={s.general_wrap}>
      <p className={s.text}>Statistics</p>
      <div className={s.stat_wrap}>
        <DoughnutChart />
        <div className={s.stat_table_wrap}>
          <StatisticDatePicker />
          <StatisticsTable />
        </div>
      </div>
    </div>
  );
};

export default StatisticsTab;

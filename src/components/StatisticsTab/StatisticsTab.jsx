import DoughnutChart from '../DoughnutChart/DoughnutChart';
import { StatisticDatePicker } from '../StatisticDatePicker/StatisticDatePicker';
import { StatisticsTable } from '../StatisticsTable/StatisticsTable';
import s from './StatisticsTab.module.css';

const StatisticsTab = () => {
  return (
    <div className={s.stat_wrap}>
      <DoughnutChart />
      <div>
        <StatisticDatePicker />
        <StatisticsTable />
      </div>
    </div>
  );
};

export default StatisticsTab;

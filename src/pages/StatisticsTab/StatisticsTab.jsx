import DoughnutChart from '../../components/DoughnutChart/DoughnutChart';
import { StatisticDatePicker } from '../../components/StatisticsDashboard/StatisticDatePicker';
import { StatisticsTable } from '../../components/StatisticsTable/StatisticsTable';
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

import DoughnutChart from '../../components/DoughnutChart/DoughnutChart';
import StatisticDatePicker from '../../components/StatisticDatePicker/StatisticDatePicker';
import StatisticsTable from '../../components/StatisticsTable/StatisticsTable';
import { useMedia } from '../../hooks/useMedia';

import s from './StatisticsTab.module.css';

const StatisticsTab = () => {
  const { isTablet, isDesktop } = useMedia();
  return (
    <>
      {!isDesktop && !isTablet && (
        <>
          <p className={s.text}>Statistics</p>
          <div className={s.donut_wrap}>
            <DoughnutChart />
          </div>
          <div className={s.stat_wrap}>
            <StatisticDatePicker />
            <StatisticsTable />
          </div>
        </>
      )}
      {isTablet && (
        <div className={s.general_wrap}>
          <div className={s.donut_wrap}>
            <p className={s.text}>Statistics</p>
            <DoughnutChart />
          </div>
          <div className={s.stat_wrap}>
            <StatisticDatePicker />
            <StatisticsTable />
          </div>
        </div>
      )}
    </>
  );
};

export default StatisticsTab;

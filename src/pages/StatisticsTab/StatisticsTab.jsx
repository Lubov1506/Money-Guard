import {
  DoughnutChart,
  StatisticDatePicker,
  StatisticsTable,
} from 'components';
import { useMedia } from 'hooks';

import s from './StatisticsTab.module.css';

const StatisticsTab = () => {
  const { isTablet, isDesktop } = useMedia();
  return (
    <>
      {!isDesktop && !isTablet && (
        <>
          <div className={s.general_wrap}>
            <p className={s.text}>Statistics</p>
            <div className={s.donut_wrap}>
              <DoughnutChart />
            </div>
            <div className={s.stat_wrap}>
              <StatisticDatePicker />
              <StatisticsTable />
            </div>
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

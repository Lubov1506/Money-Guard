import { useMediaQuery } from "react-responsive";
import DoughnutChart from "../DoughnutChart/DoughnutChart"
import { StatisticDatePicker } from "../StatisticsDashboard/StatisticDatePicker"
import { StatisticsTable } from "../StatisticsTable/StatisticsTable"
import s from './StatisticsTab.module.css'

const StatisticsTab = () => {
      const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
      <div className={s.stat_wrap}>
          <DoughnutChart />
          <div>
              <StatisticDatePicker />
              <StatisticsTable/>
          </div>
    </div>
  )
}

export default StatisticsTab
import s from './CurrencyChart.module.css';
import CircleSVG from './CircleSVG';
import LineChartSVG from './LineChartSVG';
import AreaChartSVG from './AreaChartSVG';
const CurrencyChart = ({ usd, eur, type = 'mob' }) => {
  const typeOfWidth = {
    desk: '480',
    tab: '336',
    mob: '320',
  };
  return (
    <div className={s.chart_wrapper}>
      <div className={s.first_circle}>
        {type === 'desk' && <p>{usd}</p>}
        <CircleSVG />
      </div>
      <div className={s.second_circle}>
        {type === 'desk' && <p>{eur}</p>}
        <CircleSVG />
      </div>
      <div className={s.line_chart}>
        <LineChartSVG width={typeOfWidth[type]} />
      </div>
      <div className={s.area_chart}>
        <AreaChartSVG width={typeOfWidth[type]} />
      </div>
    </div>
  );
};

export default CurrencyChart;

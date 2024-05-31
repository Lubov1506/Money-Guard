import { useMediaQuery } from 'react-responsive';
import s from './CurrencyChart.module.css';
const CurrencyChart = ({ usd, eur , type='mob'}) => {
  const typeOfWidth = {
    desk: '400',
    tab: '336',
    mob: '320'
  }
    console.log(typeOfWidth[type]);
  return (
    <div className={s.chart_wrapper}>
      <div className={s.first_circle}>
        {type==='desc' && <p>{usd}</p>}
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4.5" cy="4.5" r="4" fill="#563EAF" stroke="#FF868D" />
        </svg>
      </div>
      <div className={s.second_circle}>
        {type==='desc' && <p>{eur}</p>}
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4.5" cy="4.5" r="4" fill="#563EAF" stroke="#FF868D" />
        </svg>
      </div>
      <div className={s.line_chart}>
        <svg
          width={typeOfWidth[type]}
          height="102"
          viewBox="0 0 480 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 68.5585L38.4 43.1037C41.728 40.3298 50.9952 34.7819 61.44 34.7819C71.8848 34.7819 80.128 38.6981 82.944 40.6561L165.12 96.461C167.424 98.0927 174.49 101.356 184.32 101.356C194.15 101.356 201.216 98.0927 203.52 96.461L345.6 8.83226C349.184 6.22151 357.12 1 367.104 1C377.088 1 386.048 6.22151 390.144 8.83226L420.864 29.3919C422.912 30.6973 429.312 33.3081 438.528 33.3081C447.744 33.3081 452.727 30.4637 454.656 29.3919C461.379 25.6567 466.207 21.6267 474.624 22.0492C475.705 22.1035 478.251 22.335 480 23.0282"
            stroke="#FF868D"
          />
        </svg>
      </div>
      <div className={s.area_chart}>
        <svg
          width={typeOfWidth[type]}
          height="167"
          viewBox="0 0 480 167"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.4 42.1037L0 67.5585V167H480V22.0282C478.251 21.335 475.705 21.1035 474.624 21.0492C466.207 20.6267 461.379 24.6567 454.656 28.3919L454.573 28.4384C452.585 29.5434 447.614 32.3081 438.528 32.3081C429.312 32.3081 422.912 29.6973 420.864 28.3919L390.144 7.83226C386.048 5.22151 377.088 0 367.104 0C357.12 0 349.184 5.22151 345.6 7.83226L203.52 95.461C201.216 97.0927 194.15 100.356 184.32 100.356C174.49 100.356 167.424 97.0927 165.12 95.461L82.944 39.6561C80.128 37.6981 71.8848 33.7819 61.44 33.7819C50.9952 33.7819 41.728 39.3298 38.4 42.1037Z"
            fill="url(#paint0_linear_63_1693)"
            fillOpacity="0.6"
          />
          <path
            d="M38.4 42.1037L0 67.5585V167H480V22.0282C478.251 21.335 475.705 21.1035 474.624 21.0492C466.207 20.6267 461.379 24.6567 454.656 28.3919L454.573 28.4384C452.585 29.5434 447.614 32.3081 438.528 32.3081C429.312 32.3081 422.912 29.6973 420.864 28.3919L390.144 7.83226C386.048 5.22151 377.088 0 367.104 0C357.12 0 349.184 5.22151 345.6 7.83226L203.52 95.461C201.216 97.0927 194.15 100.356 184.32 100.356C174.49 100.356 167.424 97.0927 165.12 95.461L82.944 39.6561C80.128 37.6981 71.8848 33.7819 61.44 33.7819C50.9952 33.7819 41.728 39.3298 38.4 42.1037Z"
            fill="#390096"
            fillOpacity="0.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_63_1693"
              x1="240"
              y1="18.5"
              x2="240"
              y2="146"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop
                offset="0.374892"
                stopColor="white"
                stopOpacity="0.536458"
              />
              <stop offset="0.6091" stopColor="white" stopOpacity="0.269957" />
              <stop
                offset="0.766012"
                stopColor="white"
                stopOpacity="0.151176"
              />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default CurrencyChart;

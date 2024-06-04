import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectPeriodTransactions } from '../../redux/transactions/selectors';
import css from './DoughnutChart.module.css';
import { getTrasactionCategoryColor } from '../../constants/TransactionConstants';
import { getformattedBalance } from '../../helpers/getformatNumber';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  cutout: '75%',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },

  animation: {
    animateRotate: true,
    animateScale: true,
    duration: 2000,
  },
};
const optionsDefault = {
  cutout: '75%',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      display: false,
    },
  },
  animation: {
    animateRotate: true,
    animateScale: true,
  },
};

const DoughnutChart = () => {
  const transactions = useSelector(selectPeriodTransactions);

  const expense = transactions.categoriesSummary
    ? transactions.categoriesSummary.filter(
        transaction => transaction.type === 'EXPENSE'
      )
    : [];

  const expenseTotal = transactions.expenseSummary || 0;
  const incomeTotal = transactions.incomeSummary || 0;
  const total = incomeTotal + expenseTotal;
  const balance = total ? total : 0;
  const data = expense.map(item => ({
    ...item,
    color: getTrasactionCategoryColor(item.name),
  }));
  const doughnutData = data.length
    ? {
        labels: data.map(expense => expense.name),
        datasets: [
          {
            label: ' Expenses',
            data: !data.length ? [0] : data.map(expense => expense.total),
            backgroundColor: data.map(expense => expense.color),
            borderColor: data.map(expense => expense.color),
            borderWidth: 1,
            borderJoinStyle: 'round',
            borderAlign: 'inner',
          },
        ],
      }
    : {
        labels: ['No transactions'],
        datasets: [
          {
            label: ' No expenses',
            data: [1],
            backgroundColor: ['rgba(255, 255, 255, 0.6)'],
            borderColor: ['rgba(255, 255, 255, 0.6)'],
            borderWidth: 0,
          },
        ],
      };

  const formattedBalance = getformattedBalance(balance);

  return (
    <div className={css.doughnutContainer}>
      {(() => {
        if (!expenseTotal) {
          return (
            <>
              <div
                className={`${css.balance} ${
                  balance < 0 ? css.negativeBalance : css.positiveBalance
                }`}
              >
                <p className={css.textMobile}>No transactions</p>
                <p className={css.text}>
                  No transactions,
                  <br /> your balance is:
                </p>
                <p> ₴ {formattedBalance}</p>
              </div>
              <Doughnut
                className={css.doughnut}
                data={doughnutData}
                options={optionsDefault}
              />
            </>
          );
        } else {
          return (
            <>
              <div
                className={`${css.balance} ${
                  balance < 0 ? css.negativeBalance : css.positiveBalance
                }`}
              >
                ₴ {formattedBalance}
              </div>
              <Doughnut
                className={css.doughnut}
                data={doughnutData}
                options={options}
              />
            </>
          );
        }
      })()}
    </div>
  );
};

export default DoughnutChart;

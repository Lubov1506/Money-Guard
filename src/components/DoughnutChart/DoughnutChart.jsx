// import { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { selectPeriodTransactions } from '../../redux/transactions/selectors';
// import { fetchPeriodTrnThunk } from '../../redux/transactions/operations';
import css from './DoughnutChart.module.css';
import { getTrasactionCategoryColor } from '../../constants/TransactionConstants';

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
  const user = useSelector(selectUser);
  const balance = user ? user.balance : 0;
  // const getCurrentMonthYear = () => {
  //   const currentDate = new Date();
  //   const month = currentDate.getMonth() + 1;
  //   const year = currentDate.getFullYear();
  //   return { month, year };
  // };

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchPeriodTrnThunk(getCurrentMonthYear()));
  // }, [dispatch]);

  const transactions = useSelector(selectPeriodTransactions);
  console.log(transactions);

  const expense = transactions.categoriesSummary
    ? transactions.categoriesSummary.filter(
        transaction => transaction.type === 'EXPENSE'
      )
    : [];

  const expenseTotal = transactions.expenseSummary || 0;
  const incomeTotal = transactions.incomeSummary || 0;

  console.log(expenseTotal, incomeTotal);

  const data = expense.map(item => ({
    ...item,
    color: getTrasactionCategoryColor(item.name),
  }));
  console.log(data);
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
        labels: ['Add expenses'],
        datasets: [
          {
            label: ' No expenses',
            data: [1],
            backgroundColor: ['#ffffff'],
            borderColor: ['#ffffff'],
            borderWidth: 1,
          },
        ],
      };

  const formattedBalance = balance
    .toLocaleString('uk-UA', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,/, '.');

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
                <p className={css.textMobile}>Add expenses</p>
                <p className={css.text}>Add expenses, your balance is:</p>
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

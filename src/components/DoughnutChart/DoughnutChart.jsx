import { useEffect } from 'react'; // Імпортуйте useEffect з React
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { selectPeriodTransactions } from '../../redux/transactions/selectors';
import { fetchPeriodTrnThunk } from '../../redux/transactions/operations';
import css from './DoughnutChart.module.css';
import { getTrasactionCategoryColor } from '../../constants/TransactionConstants';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: null,
  },

  animation: {
    animateRotate: true,
    animateScale: true,
  },
};

const DoughnutChart = () => {
  const user = useSelector(selectUser);
  const balance = user ? user.balance : 0;
  function getCurrentMonthYear() {
    const currentDate = new Date();
    const month = currentDate.getMonth(); // + 1;
    const year = currentDate.getFullYear();
    return { month, year };
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeriodTrnThunk(getCurrentMonthYear()));
  }, [dispatch]);

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
  const doughnutData = {
    labels: data.map(expense => expense.name),
    datasets: [
      {
        label: ' Expenses ',
        data: !data.length ? [0] : data.map(expense => expense.total),
        backgroundColor: data.map(expense => expense.color),
        borderColor: data.map(expense => expense.color),
        borderWidth: 1,
        borderJoinStyle: 'round',
        borderAlign: 'inner',
      },
    ],
  };

  return (
    <div className={css.doughnut}>
      {!expenseTotal && !incomeTotal ? (
        <div>
          <p>Add expenses and incomes to see the chart</p>
          <p>Your balance is ₴ {Math.abs(balance).toFixed(2)}</p>
        </div>
      ) : !expenseTotal && incomeTotal ? (
        <div>
          <p>Add some expenses</p>
          <p>Your income is ₴ {Math.abs(incomeTotal).toFixed(2)}</p>
        </div>
      ) : (
        <>
          <div className={css.balance}>₴ {Math.abs(balance).toFixed(2)}</div>
          <Doughnut data={doughnutData} options={options} />
        </>
      )}
    </div>
  );
};

export default DoughnutChart;

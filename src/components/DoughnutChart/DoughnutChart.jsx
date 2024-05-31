import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import css from "./DoughnutChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);
const Total = 24000;
const data = {
  labels: [
    "Main expenses",
    "Products",
    "Car",
    "Self care",
    "Child care",
    "Household products",
    "Education",
    "Leisure",
    "Entertainment",
    "Other expenses",
  ],
  datasets: [
    {
      label: "# of Expenses",
      data: [8700, 3800.74, 1500, 800, 2208.5, 300, 3400, 1230, 610],
      backgroundColor: [
        "#FED057",
        "#FFD8D0",
        "#FD9498",
        "#C5BAFF",
        "#6E78E8",
        "#4A56E2",
        "#81E1FF",
        "#24CCA7",
        "#FAFAFA",
        "#00AD84",
      ],
      borderColor: [
        "#FED057",
        "#FFD8D0",
        "#FD9498",
        "#C5BAFF",
        "#6E78E8",
        "#4A56E2",
        "#81E1FF",
        "#24CCA7",
        "#FAFAFA",
        "#00AD84",
      ],
      borderWidth: 1,
    },
  ],
};

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
  return (
    <div className={css.doughnut}>
      <div className={css.balance}>₴ {Math.abs(Total).toFixed(2)}</div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;

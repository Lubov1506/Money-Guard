import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler
);
const firstData = [20,27.55, 30, 28];
const secondData = firstData.map((item) => (item - item * 0.2));
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Line Dataset",
      data: firstData,

      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.4)",
      fill: false,
          yAxisID: "y",
       tension: 0.4,
    },
    {
      label: "Area Dataset",
      data: secondData,
      borderColor: "rgba(153,102,255,1)",
      backgroundColor: "rgba(153,102,255,0.2)",
      fill: true,
        yAxisID: "y1",
       tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
    scales: {
        x: {
      display: false,
          
      },
    y: {
      type: "linear",
      display: false,
          position: "left",

    },
    y1: {
      type: "linear",
      display: false,
      position: "right",
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
    },
  },
};

const Currency = () => (
  <div>
    <h2>Combined Line and Area Chart</h2>
    <Line data={data} options={options} />
  </div>
);

export default Currency;

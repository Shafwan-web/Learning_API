import React from "react";
import {
  Chart as ChartJS,
  CategoryScale, // for x-axis
  LinearScale, // for y-axis
  BarElement, // for bar charts
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2, 9],
      backgroundColor: "rgba(75,192,192,0.6)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Sales",
    },
  },
};
export default function BarChat() {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

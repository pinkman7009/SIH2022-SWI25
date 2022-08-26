import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Children enrolled in various schemes and measures",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [
  "Integrated Child Development Scheme",
  "Apki Beti Hamari Beti",
  "Integrated Child Protection Scheme",
  "SSA",
  "Sukanya Samriddhi Yojna",
  "Beti Bachao Beti Padhao",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Children ineligible/not registered",
      data: [3, 4, 5, 4, 2, 3],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Children registered but discontinued",
      data: [4, 1, 9, 2, 3, 4],
      backgroundColor: "rgb(53, 162, 235)",
    },
    {
      label: "Children registered and active",
      data: [12, 11, 4, 10, 15, 11],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

export function BarGraph() {
  return <Bar options={options} data={data} />;
}

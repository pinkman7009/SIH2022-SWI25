import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

const Charts = ({ stats }) => {
  const computePieStats = (stats) => {
    const ageGroups = Object.keys(stats.childrenAge);

    const low = parseInt(ageGroups[0]);
    const high = parseInt(ageGroups[ageGroups.length - 1]);

    let pieRange = [];
    let pieValues = [];

    for (let i = low; i <= high; i++) {
      pieRange.push(i);
    }

    pieRange.forEach((item) => {
      if (stats.childrenAge[item]) pieValues.push(stats.childrenAge[item]);
      else pieValues.push(0);
    });

    return { pieRange, pieValues };
  };

  const computeChartStats = (stats) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let chartValues = [];

    months.forEach((item) => {
      const currentYear = new Date().getFullYear();
      const key = `${item} ${currentYear}`;
      if (stats.pendingGrievances[key])
        chartValues.push(stats.pendingGrievances[key]);
      else chartValues.push(0);
    });

    return chartValues;
  };

  const pieStats = computePieStats(stats);
  const chartStats = computeChartStats(stats);

  const [loading, setLoading] = useState(true);

  const [chartData, setChartData] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Pending Grievances", // Name the series
        tension: 0.4,
        data: chartStats, // Specify the data values array
        borderColor: "#2196f3", // Add custom color border (Line)
        backgroundColor: "#2196f3", // Add custom color background (Points and Fill)
        borderWidth: 1, // Specify bar border width
        fill: true,
      },
    ],
  });

  const [pieData, setPieData] = useState({
    labels: [6, 7, 8, 12],
    datasets: [
      {
        label: "Age of children registered",
        data: [1, 2, 1, 2],
        backgroundColor: [
          "rgba(236, 54, 110, 1)",
          "rgba(71, 139, 214, 1)",
          "rgba(245, 177, 97, 1)",
          "rgba(24, 138, 141, 1)",
          "rgba(8, 37, 140, 1)",
          "rgba(245, 218, 97, 1)",
        ],
        borderColor: [
          "rgba(236, 54, 110, 1)",
          "rgba(71, 139, 214, 1)",
          "rgba(245, 177, 97, 1)",
          "rgba(24, 138, 141, 1)",
          "rgba(8, 37, 140, 1)",
          "rgba(245, 218, 97, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    if (stats.length > 0) {
      setLoading(false);
    }
  }, []);

  return (
    <div
      className={`w-full h-[500px]border-primary rounded-md p-3 flex items-center justify-evenly`}
    >
      <div
        className={`w-1/2
      `}
      >
        <Line
          data={chartData}
          options={{
            responsive: true, // Instruct chart js to respond nicely.
          }}
        />
      </div>

      <div className={`w-1/4`}>
        <h3>Age of Children Registered</h3>
        <Doughnut data={pieData} />;
      </div>
    </div>
  );
};

export default Charts;

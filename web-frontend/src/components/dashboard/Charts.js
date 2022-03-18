import React, { useState } from "react";
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
import { Line, Doughnut } from "react-chartjs-2";

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

const Charts = () => {
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
        data: [10, 20, 10, 10, 30, 40, 15, 5, 28, 32], // Specify the data values array
        borderColor: "#2196f3", // Add custom color border (Line)
        backgroundColor: "#2196f3", // Add custom color background (Points and Fill)
        borderWidth: 1, // Specify bar border width
        fill: true,
      },
    ],
  });

  const [pieData, setPieData] = useState({
    labels: ["11", "12", "13", "14", "15", "16", "17"],
    datasets: [
      {
        label: "Age of children registered",
        data: [12, 19, 3, 5, 2, 3],
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
  return (
    <div className="w-full h-[500px] border-primary rounded-md p-3 flex items-center justify-evenly">
      <div className="w-1/2">
        <Line
          data={chartData}
          options={{
            responsive: true, // Instruct chart js to respond nicely.
          }}
        />
      </div>

      <div className="w-1/4">
        <h3>Age of Children Registered</h3>
        <Doughnut data={pieData} />;
      </div>
    </div>
  );
};

export default Charts;

"use client";

import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(...registerables);

function PieChart() {
  const races = [
    {
      race: "Hispanic/Latino 52.71%",
      cases: 32614,
    },
    {
      race: "Black 26.17%",
      cases: 16192,
    },
    {
      race: "White 14.93%",
      cases: 9240,
    },
    {
      race: "Other 5.64%",
      cases: 3489,
    },
    {
      race: "Asian 0.49%",
      cases: 304,
    },
    {
      race: "Pacific Islander 0.03%",
      cases: 20,
    },
    {
      race: "Unknown 0.02%",
      cases: 10,
    },
    {
      race: "Native American 0.01%",
      cases: 5,
    },
  ];

  var data = {
    labels: races.map((x: any) => x.race),
    datasets: [
      {
        label: "Arrests by Race",
        data: races.map((x: any) => x.cases),
        backgroundColor: [
          "rgba(27, 221, 148, 0.7)",
          "rgba(1, 184, 193, 0.7)",
          "rgba(38, 147, 218, 0.7)",
          "rgba(255, 205, 0, 0.7)",
          "rgba(255, 117, 31, 0.7)",
          "rgba(0, 137, 75, 0.7)",
          "rgba(26, 75, 198, 0.7)",
          "rgba(88, 24, 199, 0.7)",
        ],
        borderColor: [
          "#41ffca",
          "#2dd4bf",
          "#7dd3fc",
          "#fde047",
          "#fb923c",
          "#16a34a",
          "#2563eb",
          "rgba(88, 24, 199, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    plugins: {
      legend: {
        labels: {
          color: "rgb(255, 255, 255)",
          font: {
            weight: "bold",
            size: 12
          },
        },
      },
    },
  };

  return (
    <div className="mt-6">
      <h3 className="mb-2">2022 Arrests by Race</h3>
      <Pie data={data} height={400} options={options} />
    </div>
  );
}

export default PieChart;

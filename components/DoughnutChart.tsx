"use client";

import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(...registerables);

function DoughnutChart() {
  const arrestType = [
    {
      arrest: "Felony",
      cases: 30378,
    },
    {
      arrest: "Misdemeanor",
      cases: 26245,
    },
    {
      arrest: "Infraction",
      cases: 4186,
    },
    {
      arrest: "Dependent",
      cases: 545,
    },
    {
      arrest: "Other",
      cases: 520,
    },
  ];

  var data = {
    labels: arrestType.map((x: any)=> x.arrest),
    datasets: [
      {
        label: "Arrest Cases",
        data: arrestType.map((x: any) => x.cases),
        backgroundColor: [
          "rgba(27, 221, 148, 0.7)",
          "rgba(1, 184, 193, 0.7)",
          "rgba(38, 147, 218, 0.7)",
          "rgba(255, 205, 0, 0.7)",
          "rgba(255, 117, 31, 0.7)",
        ],
        borderColor: [
          "#41ffca",
          "#2dd4bf",
          "#7dd3fc",
          "#fde047",
          "#fb923c",
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
    <div className="mt-4">
      <h3 className="mb-2">Arrests by Arrest Type</h3>
      <Doughnut data={data} height={400} options={options} />
    </div>
  );
}

export default DoughnutChart;
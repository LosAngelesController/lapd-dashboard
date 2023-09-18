"use client";

import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

function Staffing() {
  const years = [
    {
      year: 2017,
      officers: 10322,
      civilianEmployees: 3457
    },
    {
      year: 2018,
      officers: 10379,
      civilianEmployees: 4432
    },
    {
      year: 2019,
      officers: 10377,
      civilianEmployees: 3746
    },
    {
      year: 2020,
      officers: 10217,
      civilianEmployees: 3795
    },
    {
      year: 2021,
      officers: 9988,
      civilianEmployees: 3429
    },
    {
      year: 2022,
      officers: 9742,
      civilianEmployees: 3366
    },
    {
      year: 2023,
      officers: 9378,
      civilianEmployees: 3018
    },
  ];

  var data = {
    labels: years.map((x: any) => x.year),
    datasets: [
      {
        label: "SWORN OFFICERS",
        data: years.map((x: any) => x.officers),
        backgroundColor: [
          "#41ffca",

        ],
        borderColor: [
          "#41ffca",
        ],
        borderWidth: 1,
      },
      {
        label: "CIVILIAN STAFF",
        data: years.map((x: any) => x.civilianEmployees),
        backgroundColor: [
          "#f5e942",
        ],
        borderColor: [
          "#f5e942",
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
    scales: {
      y: {
        grid: {
          display: true,
          color: "rgba(198, 198, 198, .5)",
        },
        ticks: {
          color: "rgb(255, 255, 255)"
        }
      },
      x: {
        grid: {
          display: true,
          color: "rgba(198, 198, 198, .5)",
        },
        ticks: {
          color: "rgb(255, 255, 255)"
        }
      }
    }
  };

  return (
    <div className="mt-4">
      <h5 className="mb-2">SWORN LAPD OFFICERS FY2012 - JUNE 2023</h5>
      <Bar data={data} height={325} options={options} />
    </div>
  );
}

export default Staffing;
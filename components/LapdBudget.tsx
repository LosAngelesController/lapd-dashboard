"use client";

import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

function LapdBudget() {
const policeBudget = [
  {
    year: 2014,
    operatingBudget: 1310820443,
    totalBudget: 2396477032,
  },
  {
    year: 2015,
    operatingBudget: 1338185759,
    totalBudget: 2461629453,
  },
  {
    year: 2016,
    operatingBudget: 1438019291,
    totalBudget: 2566431967,
  },
  {
    year: 2017,
    operatingBudget: 1485553257,
    totalBudget: 2584334601,
  },
  {
    year: 2018,
    operatingBudget: 1578265278,
    totalBudget: 2722879273,
  },
  {
    year: 2019,
    operatingBudget: 1609385210,
    totalBudget: 2842394659,
  },
  {
    year: 2020,
    operatingBudget: 1733838124,
    totalBudget: 3018174186,
  },
  {
    year: 2021,
    operatingBudget: 1721292382,
    totalBudget: 3002584739,
  },
  {
    year: 2022,
    operatingBudget: 1760908714,
    totalBudget: 3070732076,
  },
  {
    year: 2023,
    operatingBudget: 1876830890,
    totalBudget: 3153241688,
  },
  {
    year: 2024,
    operatingBudget: 1895285637,
    totalBudget: 3240030260,
  },
];

var data = {
    labels: policeBudget.map((x: any) => x.year),
    datasets: [
      {
        label: "LAPD Total Budget",
        data: policeBudget.map((x: any) => x.totalBudget),
        backgroundColor: [
          "#41ffca",
        ],
        borderColor: [
          "#41ffca",
        ],
        borderWidth: 1,
      },
      {
        label: "LAPD Operating Budget",
        data: policeBudget.map((x: any) => x.operatingBudget),
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
      <h5 className="mb-2">LAPD Budget 2014-2024</h5>
      <Bar data={data} height={325} options={options} />
    </div>
  );
}

export default LapdBudget;

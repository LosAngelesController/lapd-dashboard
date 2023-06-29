"use client";

import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

function BarChart() {
  const councilDistricts = [
    {
      district: 1,
      cases: 6071,
    },
    {
      district: 2,
      cases: 3141,
    },
    {
      district: 3,
      cases: 3405,
    },
    {
      district: 4,
      cases: 2337,
    },
    {
      district: 5,
      cases: 2284,
    },
    {
      district: 6,
      cases: 4933,
    },
    {
      district: 7,
      cases: 2771,
    },
    {
      district: 8,
      cases: 6012,
    },
    {
      district: 9,
      cases: 5709,
    },
    {
      district: 10,
      cases: 3601,
    },
    {
      district: 11,
      cases: 4389,
    },
    {
      district: 12,
      cases: 2627,
    },
    {
      district: 13,
      cases: 5268,
    },
    {
      district: 14,
      cases: 6138,
    },
    {
      district: 15,
      cases: 2986,
    },
  ];

  var data = {
    labels: councilDistricts.map((x: any) => x.district),
    datasets: [
      {
        label: "Arrests by Council District",
        data: councilDistricts.map((x: any) => x.cases),
        backgroundColor: [
          "#41ffca",
          "#41ffca",
          "#41ffca",
          "#41ffca",
          "#41ffca",
          "#41ffca",
        ],
        borderColor: [
          "#41ffca",
          "#41ffca",
          "#41ffca",
          "#41ffca",
          "#41ffca",
          "#41ffca",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    plugins: {
      legend: {
        color: "rgba(0, 0, 0, 1)",
        labels: {
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
        }
      },
      x: {
        grid: {
          display: true,
          color: "rgba(198, 198, 198, .5)",
        }
      }
    }
  };

  return (
    <div className="mt-4">
      <h5 className="mb-2">Arrests by Council District</h5>
      <Bar data={data} height={325} options={options} />
    </div>
  );
}

export default BarChart;

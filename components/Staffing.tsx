"use client";

import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

function Staffing() {
  const years = [
    // {
    //   year: 2017,
    //   officers: 10322,
    //   civilianEmployees: 3457
    // },
    {
      year: 2018,
      officers: 9990,
      civilianEmployees: 3002,
    },
    {
      year: 2019,
      officers: 10004,
      civilianEmployees: 2992,
    },
    {
      year: 2020,
      officers: 9963,
      civilianEmployees: 3070,
    },
    {
      year: 2021,
      officers: 9390,
      civilianEmployees: 2749,
    },
    {
      year: 2022,
      officers: 9277,
      civilianEmployees: 2689,
    },
    // {
    //   year: 2023,
    //   officers: 9378,
    //   civilianEmployees: 3018
    // },
  ];

  var data = {
    labels: years.map((x: any) => x.year),
    datasets: [
      {
        label: "SWORN PERSONNEL",
        data: years.map((x: any) => x.officers),
        backgroundColor: ["#41ffca"],
        borderColor: ["#41ffca"],
        borderWidth: 1,
      },
      {
        label: "CIVILIAN PERSONNEL",
        data: years.map((x: any) => x.civilianEmployees),
        backgroundColor: ["#f5e942"],
        borderColor: ["#f5e942"],
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
            size: 12,
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
          color: "rgb(255, 255, 255)",
        },
      },
      x: {
        grid: {
          display: true,
          color: "rgba(198, 198, 198, .5)",
        },
        ticks: {
          color: "rgb(255, 255, 255)",
        },
      },
    },
  };

  return (
    <>
      <div className="mt-4">
        <h5 className="mb-2">SWORN LAPD OFFICERS 2018 - 2022</h5>
        <Bar data={data} height={325} options={options} />
        <a
          href="https://controller.lacity.gov/acfr22.pdf"
          className="underline text-xs flex justify-center mt-4"
          style={{ color: "#41ffca" }}
          target="_blank"
        >
          Source: Annual Comprehensive Financial Report (ACFR)
        </a>
      </div>
    </>
  );
}

export default Staffing;

"use client";

import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

function Division() {
  const divisions = [
    {
      division: "77th Street",
      cases: 4687,
    },
    {
      division: "Central",
      cases: 3767,
    },
    {
      division: "Devonshire",
      cases: 2501,
    },
    {
      division: "Foothill",
      cases: 2105,
    },
    {
      division: "Harbor",
      cases: 1930,
    },
    {
      division: "Hollenbeck",
      cases: 2126,
    },
    {
      division: "Hollywood",
      cases: 3382,
    },
    {
      division: "Mission",
      cases: 3080,
    },
    {
      division: "N Hollywood",
      cases: 2778,
    },
    {
      division: "Newton",
      cases: 3494,
    },
    {
      division: "Northeast",
      cases: 2003,
    },
    {
      division: "Olympic",
      cases: 2822,
    },
    {
      division: "Pacific",
      cases: 3550,
    },
    {
      division: "Rampart",
      cases: 5083,
    },
    {
      division: "Southeast",
      cases: 3145,
    },
    {
      division: "Southwest",
      cases: 3091,
    },
    {
      division: "Topanga",
      cases: 2594,
    },
    {
      division: "Van Nuys",
      cases: 3296,
    },
    {
      division: "West LA",
      cases: 3543,
    },
    {
      division: "West Valley",
      cases: 2255,
    },
    {
      division: "Wilshire",
      cases: 1892,
    },
  ];

  var data = {
    labels: divisions.map((x: any) => x.division),
    datasets: [
      {
        label: "2022 Arrests by Division",
        data: divisions.map((x: any) => x.cases),
        backgroundColor: ["#41ffca"],
        borderColor: ["#41ffca"],
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
    <div className="mt-4">
      <h5 className="mb-2">2022 Arrests by Division</h5>
      <Bar data={data} height={325} options={options} />
    </div>
  );
}

export default Division;

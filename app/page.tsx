"use client";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import axios from "axios";
import BarChart from "@/components/BarChart";
import DoughnutChart from "@/components/DoughnutChart";
import PieChart from "@/components/PieChart";
import LapdBudget from "@/components/LapdBudget";
import CityBudget from "@/components/CityBudget";
import ArrestMap from "@/components/ArrestMap";
import Audits from "@/components/Audits";
import Staffing from "@/components/Staffing";
import Division from "@/components/Division";
import { Payroll } from "@/components/Payroll";
import { MantineProvider } from "@mantine/core";

export default function Home() {
  const [arrestData, setArrestData] = useState([]);
  const [cityBudget, setCityBudget] = useState([]);

  useEffect(() => {
    axios
      .get("https://controllerdata.lacity.org/resource/fcnf-7we4.json", {
        params: {
          $limit: 65000,
          $$app_token: "vIy4NMT2G767TRRR99rOqHoKY",
        },
      })
      .then((response) => {
        const data = response.data;
        // alert("Retrieved " + data.length + " records from the dataset!");
        setArrestData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios
      .get(
        "https://api.sheety.co/aacf3e0f7311db48c4e758ecf773731f/cityOfLaBudgetTabularForTransparencyCharts/sheet1",
        {
          params: {
            $limit: 600,
          },
        }
      )
      .then((response) => {
        console.log(response);
        const data = response.data.sheet1;
        console.log("data", data);
        setCityBudget(
          data
            .filter((x: any) => x.fiscalYear === 2023)
            .map((x: any) => ({
              department: x.department,
              totalBudget: x.totalBudget,
            }))
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log("arrestData", arrestData);
  console.log("cityBudget", cityBudget);

  return (
    <section className="container max-w-5xl mx-auto flex min-h-screen flex-col p-10">
      <MantineProvider
        theme={{ colorScheme: "dark" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Nav />
        <h1 className="mt-5 font-bold text-2xl text-white">LAPD Dashboard</h1>
        <h2 className="mt-7 font-bold text-xl text-white">
          LAPD FY2022-2023 Budget:{" "}
          <span
            className="bg-zinc-800 rounded-lg px-2 py-1"
            style={{ color: "#41ffca" }}
          >
            $3.15 BILLION
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <CityBudget cityBudget={cityBudget} />
          <LapdBudget />
        </div>
        <h2 className="mt-7 font-bold text-xl text-white">LAPD Staffing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <Staffing />
          <Payroll />
        </div>
        <h2 className="mt-7 font-bold text-xl text-white">2022 LAPD Arrests</h2>
        <div className="mt-2">
          <ArrestMap />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <BarChart />
          <DoughnutChart />
          <Division />
          <PieChart />
        </div>
        <h2 className="mt-7 font-bold text-xl text-white">Completed Audits</h2>
        <div className="mt-4">
          <Audits />
        </div>
        <h2 className="mt-7 font-bold text-xl text-white">Ongoing Audits</h2>
        <h2 className="mt-7 font-bold text-xl text-white">Transparency Facts</h2>
      </MantineProvider>
    </section>
  );
}

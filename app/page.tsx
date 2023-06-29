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
        alert("Retrieved " + data.length + " records from the dataset!");
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
          data.filter((x: any) => x.fiscalYear === 2023).map((x: any) => ({
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
      <Nav />
      <h1 className="mt-5 font-bold text-2xl">LAPD Dashboard</h1>
      <h2 className="mt-7 font-bold text-xl" style={{color: '#41ffca'}}>LAPD Budget</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <CityBudget cityBudget={cityBudget}/>
        <LapdBudget />
      </div>
      <h2 className="mt-7 font-bold text-xl" style={{color: '#41ffca'}}>LAPD Arrests</h2>
      <div className="mt-2">
        <ArrestMap />
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <BarChart />
        <DoughnutChart />
        <PieChart />
      </div>
    </section>
  );
}

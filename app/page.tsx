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
import CounterCard from "@/components/CounterCard";
import Division from "@/components/Division";
import { Payroll } from "@/components/Payroll";
import { MantineProvider } from "@mantine/core";

interface PayrollItem {
  index?: number;
  record?: string;
  fName?: string;
  lName?: string;
  jobTitle?: string;
  department?: string;
  basePay?: string;
  overtimePay?: string;
  otherPay?: string;
  personalBenefits?: string;
  totalPay?: string;
}

export default function Home() {
  const [arrestData, setArrestData] = useState([]);
  const [cityBudget, setCityBudget] = useState([]);
  const [payroll, setPayroll] = useState<PayrollItem[]>([]);

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
        // console.log(response);
        const data = response.data.sheet1;
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

  useEffect(() => {
    axios
      .get(
        "https://api.sheety.co/2996d79e2117ff0d746768a9b29ec03c/checkbookData20230908/checkbookData20230908Csv",
        {
          params: {
            $limit: 14000,
          },
        }
      )
      .then((response) => {
        // console.log(response.data);
        const data = response.data.checkbookData20230908Csv;
        // console.log("payroll", data);
        const payrollData = data
          .filter((x: any) => x.payYear === 2023)
          .map((x: any) => ({
            id: x.id,
            record: x.recordNbr,
            fName: x.firstName,
            lName: x.lastName,
            jobTitle: x.jobTitle,
            department: x.departmentTitle,
            basePay: x.regularPay
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            overtimePay: x.overtimePay
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            otherPay: x.allOtherPay
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            personalBenefits: x.benefitPay
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            totalPay: x.totalPay
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          }));

        setPayroll(payrollData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // console.log("payroll", payroll);

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
          <Payroll payroll={payroll} />
        </div>
        <h2 className="mt-7 font-bold text-xl text-white">LAPD Arrests</h2>
        <div className="mt-2">
          <ArrestMap />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-6">
          <BarChart />
          <DoughnutChart />
          <Division />
          <PieChart />
        </div>
        <h2 className="mt-7 mb-2 font-bold text-xl text-white">
          LAPD Shootings
        </h2>
        <h3 className="mb-2 text-bold" style={{ color: "C1C2C5" }}>
          People
        </h3>
        <div className="mt-2 justify-center items-center grid grid-cols-1 md:grid-cols-3 md:gap-6">
          <CounterCard number={42} title="Deaths" />
          <CounterCard number={42} title="Serious Injuries" />
          <CounterCard number={42} title="Total" />
        </div>
        <h3 className="mb-2 mt-7 text-bold" style={{ color: "C1C2C5" }}>
          Animals
        </h3>
        <div className="mt-2 justify-center items-center grid grid-cols-1 md:grid-cols-3 md:gap-6">
          <CounterCard number={42} title="Deaths" />
          <CounterCard number={42} title="Serious Injuries" />
          <CounterCard number={42} title="Total" />
        </div>
        <h2 className="mt-7 font-bold text-xl text-white">Completed Audits</h2>
        <div className="mt-4">
          <Audits />
        </div>
        {/* <h2 className="mt-7 font-bold text-xl text-white">Ongoing Audits</h2> */}
        <h2 className="mt-12 font-bold text-xl text-white text-center">
          Transparency Facts
        </h2>
        <div className="mt-4 flex justify-center">
          <blockquote
            className="twitter-tweet"
            data-lang="en"
            data-width="500" // Adjust the width as needed
          >
            <p lang="en" dir="ltr">
              Yesterday, LA City Council voted 12-3 to approve the new LAPD
              Contract for officers (Lieutenant & below):
              <br />
              <br />
              • This will cost taxpayers an additional $994M over 4 years
              <br />
              <br />A question brought up was how much do LAPD officers
              (Lieutenant & below) make compared to other City Employees?
              <a href="https://t.co/aJfrcXQ0KQ">pic.twitter.com/aJfrcXQ0KQ</a>
            </p>
            &mdash; LA City Controller Kenneth Mejia (@lacontroller){" "}
            <a href="https://twitter.com/lacontroller/status/1694786662839242891?ref_src=twsrc%5Etfw">
              August 24, 2023
            </a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js"></script>
          </div>
          <div className="mt-4 flex justify-center">
          <blockquote className="twitter-tweet" data-lang="en" data-width="500">
            <p lang="en" dir="ltr">
              💰 LAPD'S NEW CONTRACT (Lieutenants & below) will be voted on
              tomorrow by City Council:
              <br />
              <br />
              - $994M in additional costs over 4 years including 123M in
              additional costs to an already increased police budget this fiscal
              year
              <br />
              <br />- New recruits starting salary: $86,193 vs current $74,020
            </p>
            &mdash; LA City Controller Kenneth Mejia (@lacontroller){" "}
            <a href="https://twitter.com/lacontroller/status/1694174047234650588?ref_src=twsrc%5Etfw">
              August 23, 2023
            </a>
          </blockquote>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
          ></script>
          </div>
        
      </MantineProvider>
    </section>
  );
}

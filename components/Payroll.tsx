"use-client";
import React, { useState } from "react";
// import { Formik, Form, Field } from "formik";
import { PayrollModal } from "./PayrollModal";
import styles from "../styles/payroll.module.css";

interface PayrollProps {
  payroll: any[];
}

export function Payroll(props: PayrollProps) {
  const [value, setValue] = useState("Last, First");
  const payrollInfo = props.payroll;

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: any) => {
    console.log("handleChange", e.target.value);
    setValue(e.target.value);
    console.log("value", value);
    setShowModal(value !== "");
  };

  const onPayrollClick = () => {
    window.open(
      "https://lacity-2.payroll.socrata.com/#!/year/2023/full_time_employees,others/pay1,pay2,pay3,pay4/explore/0-0-1-0-0/fms_department_title/POLICE/1-1-0/mou_title"
    );
  };

  const uniqueNames = Array.from(
    new Set(payrollInfo.map((x: any) => `${x.lName}, ${x.fName}`))
  ).sort();
  console.log("unique names", uniqueNames);

  return (
    <div className="mt-6 grid justify-items-center">
      <div>
        <PayrollModal
          payrollInfo={payrollInfo}
          showModal={showModal}
          setShowModal={setShowModal}
          value={value}
        />
      </div>
      <div className="grid content-start">
        <h5 className="mb-2 justify-self-center">2023 PAYROLL LOOKUP</h5>
        <div className={styles.dropdown}>
          <select value={value} onChange={handleChange}>
            {uniqueNames.map((name: string, index: number) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex-cols">
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-800 rounded-lg px-4 py-2 border border-gray-400 text-slate-50 text-sm md:text-base"
            onClick={onPayrollClick}
          >
            See Full Payroll Site
          </button>
        </div>
        <p
          className="mt-2 text-sm bg-zinc-800 px-2 py-2 rounded"
          style={{ color: "#41ffca" }}
        >
          Click button to browse Open Payroll System
        </p>
      </div>
    </div>
  );
}

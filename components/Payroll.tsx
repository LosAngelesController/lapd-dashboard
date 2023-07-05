import * as React from "react";

export function Payroll() {
  const onPayrollClick = () => {
    window.open(
      "https://lacity-2.payroll.socrata.com/#!/year/2023/full_time_employees,others/pay1,pay2,pay3,pay4/explore/0-0-1-0-0/fms_department_title/POLICE/1-1-0/mou_title"
    );
  };
  return (
    <div className="mt-6 grid justify-items-center">
      <h5 className="mb-2 grid content-end">PAYROLL LOOKUP</h5>
      <div className="flex-cols">
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-800 rounded-lg px-4 py-2 border border-gray-400 text-slate-50 text-sm md:text-base"
            onClick={onPayrollClick}
          >
            See Payroll
          </button>
        </div>
        <p className="mt-2 text-sm bg-zinc-800 px-2 py-2 rounded" style={{color: "#41ffca"}}>Click button to browse Open Payroll System</p>
      </div>
    </div>
  );
}

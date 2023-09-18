import * as React from "react";
import LineItem from "./LineItem";

export default function Audits() {
  const audits = [
    {
      "image": "https://wpstaticarchive.lacontroller.io/wp-content/uploads/2022/07/Management-Audit-Report-of-the-Los-Angeles-Fire-and-Police-Pensions.png",
      "name": "Management Audit Report of the Los Angeles Fire and Police Pensions",
      "year": "2022",
      "dept": "CITY OF LOS ANGELES",
      "link": "https://controller.lacity.gov/audits/management-audit-report-of-the-los-angeles-fire-and-police-pensions"
    },
    {
      "image": "https://wpstaticarchive.lacontroller.io/wp-content/uploads/2019/05/Limited-Scope-Fiscal-Audit-Report-Cover.png",
      "name": "Limited Scope Fiscal Audit at the Los Angeles Police Department",
      "year": "2018",
      "dept": "LOS ANGELES POLICE DEPARTMENT",
      "link": "https://controller.lacity.gov/audits/limited-scope-fiscal-audit-at-the-los-angeles-police-department"
    }
  ]

  return (
    <>
      <div className="md:hidden">
        {audits.map((eachaudit: any, eachauditnum: number) => (
          <LineItem
            key={eachauditnum}
            dept={eachaudit.dept}
            link={eachaudit.link}
            name={eachaudit.name}
            year={eachaudit.year}
          />
        ))}
      </div>

      <div className="hidden md:block">
        <div className="flex flex-row gap-x-3 justify-around">
          {audits.map((eachaudit: any, eachauditnum: number) => (
            <>
              <div
                key={eachauditnum}
                className="mb-2 w-full max-w-xs bg-gray-200 dark:bg-zinc-800 dark:text-white"
              >
                <a href={eachaudit.link} target="_blank">
                  <img src={eachaudit.image} className="w-full" style={{height: "354.94px"}}></img>
                </a>
              </div>

              <div className="px-2 py-2">
                <a href={eachaudit.link} target="_blank">
                <p className="bg-zinc-800 px-2 py-2 rounded" style={{color: "#41ffca"}}>
                {/* <p> */}
                  {eachaudit.year} |{" "}
                  <span>
                    {eachaudit.name}
                  </span>
                </p>
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
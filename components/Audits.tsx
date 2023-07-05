import * as React from "react";
import LineItem from "./LineItem";

import { audits } from "@/audits.json";

export default function Audits() {

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

// export async function getStaticProps() {
//   return {
//     props: {
//       audits,
//     },
//   };
// }


import React from "react";

interface setRecord {
  payrollInfo: any;
  showModal: boolean;
  setShowModal: any;
  value: string;
}

export function PayrollModal(props: setRecord) {
  const records = props.payrollInfo;
  const payrollName = props.value;

  return (
    <div>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-1 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-zinc-900 w-content bg-opacity-90 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-base font-semibold">{payrollName}</h3>
                </div>
                <div className="relative p-3 flex-auto">
                  <ul className="my-1 text-slate-50 text-sm leading-relaxed">
                    {records.map((item: any) => {
                      if (`${item.lName}, ${item.fName}` === payrollName) {
                        return (
                          <React.Fragment key={item.index}>
                            <li className="leading-none my-2">
                              <strong className="text-blue-400">
                                First Name:
                              </strong>{" "}
                              {item.fName}
                            </li>
                            <li className="leading-none my-2">
                              <strong className="text-blue-400">
                                Last Name:
                              </strong>{" "}
                              {item.lName}
                            </li>
                            <li className="leading-none my-2">
                              <strong className="text-blue-400">
                                Job Title:
                              </strong>{" "}
                              {item.jobTitle}
                            </li>
                            <li className="leading-none my-2">
                              <strong className="text-blue-400">
                                Department:
                              </strong>{" "}
                              {item.department}
                            </li>
                            <li className="leading-none my-2">
                              <strong className="text-blue-400">
                                Base Pay:
                              </strong>{" "}
                              ${item.basePay}
                            </li>
                            <li className="leading-none my-2">
                              <strong className="text-blue-400">
                                Overtime Pay:
                              </strong>{" "}
                              ${item.overtimePay}
                            </li>
                            <li className="leading-none my-2">
                              <strong className="text-blue-400">
                                Other Pay:
                              </strong>{" "}
                              ${item.otherPay}
                            </li>
                            <li className="leading-none my-2">
                              <strong className="text-blue-400">
                                Personal Benefits:
                              </strong>{" "}
                              ${item.personalBenefits}
                            </li>
                            <li className="leading-none my-2 mb-6">
                              <strong className="text-blue-400">
                                Total Pay:
                              </strong>{" "}
                              ${item.totalPay}
                            </li>
                          </React.Fragment>
                        );
                      } else if (`${item.fName}` === "Select By Name") {
                        return null;
                      }
                      return null;
                    })}
                  </ul>
                </div>
                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-1 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

"use client";

import Image from "next/image";
import starIcon from "../../assets/icons/starIcon.svg";
import monaco from "../../assets/icons/monaco-flag.svg";
import montenegro from "../../assets/icons/montenegro-flag.svg";
import arrow from "../../assets/icons/down-arrow-icon.svg";
import { useState } from "react";

const CustomTable = ({ thead, tbody }) => {
  const [sortStatus, setsortStatus] = useState(null);
  const [sortPairs, setsortPairs] = useState(null);
  const [sortPayouts, setsortPayouts] = useState(null);

  const Sort = (th) => {
    th === "Status"
      ? setsortStatus(!sortStatus)
      : th === "Pairs"
      ? setsortPairs(!sortPairs)
      : setsortPayouts(!sortPayouts);
    getArrowStyle(th);
  };

  const getArrowStyle = (columnName) => {
    if (
      (columnName === "Status" && sortStatus) ||
      (columnName === "Pairs" && sortPairs) ||
      (columnName === "Payouts" && sortPayouts)
    ) {
      return { transform: "rotate(180deg)" };
    }
    return { transform: "rotate(0deg)" };
  };
  return (
    <table className="table-auto w-full text-left lg:text-center text-xs text-gray-400">
      <thead className="pb-5">
        <tr>
          {thead.map((th, index) => {
            return (
              <th key={index} className="pb-4 text-center">
                <div className="flex items-center gap-2">
                  {th}
                  <Image
                    src={arrow}
                    alt="arrow"
                    className="w-3 h-5 cursor-pointer"
                    style={getArrowStyle(th)}
                    onClick={() => Sort(th)}
                  />
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tbody.map((tr, index) => {
          return (
            <tr key={index}>
              <td className="py-2 text-center flex justify-center">
                <Image src={starIcon} alt="start" />
              </td>
              <td className="py-2 text-center ">
                <div className="flex justify-center">
                  <Image
                    src={monaco}
                    alt="flag"
                    className="rounded-full w-5 "
                  />
                  <Image
                    src={montenegro}
                    alt="flag"
                    className="rounded-full w-5 -translate-x-1"
                  />
                </div>
              </td>
              <td className="py-2 text-center">CHF/JPY91.0%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomTable;

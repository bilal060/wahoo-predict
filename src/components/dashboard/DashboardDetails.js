"use client";

import React, { useState, useEffect } from "react";
import CustomCard from "../dynamic/CustomCard";
import CustomCardPlainBorder from "../dynamic/CustomCardPlainBorder";

const DashboardDetails = (props) => {
  const [amount, setAmount] = useState(1);
  const [seconds, setSeconds] = useState(10);
  const digits = [1, 2, 5, 10, 15, 20, 30, 50, 90];
  const timeSecondss = [10, 15, 20, 25, 30, 35, 40, 50, 60];
  const [time, setTime] = useState(new Date());
  const { setSecondss, setPrice } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  };

  return (
    <React.Fragment>
      <CustomCard title="Payout">
        <h1 className="text-2xl text-green-500 py-2">+91%</h1>
        <p className="text-green-500 text-[14px]">$19.25</p>
        <p className="text-gray-500 text-[14px] py-2">Profit</p>
        <p className="text-green-500 text-[14px]">+$8.22</p>
      </CustomCard>
      <CustomCard title="Price">
        <h1 className="text-lg text-white">$0</h1>
      </CustomCard>

      <CustomCardPlainBorder title="Amount">
        <h1 className="text-lg w-full text-center text-white border-b-2 border-gray-700 pb-2">{`$${amount}`}</h1>
        <div className="grid grid-cols-12 w-full pt-3 px-2 gap-y-2">
          {digits.map((digit, index) => {
            return (
              <div
                key={index}
                className="col-span-4 flex items-center justify-center cursor-pointer hover:bg-[#0f223b] rounded-sm"
              >
                <p
                  className={`${
                    digit === amount
                      ? "text-white cursor-pointer text-sm mb-1"
                      : "text-gray-500 cursor-pointer text-sm mb-1"
                  }`}
                  onClick={() => {
                    setAmount(digit);
                    setPrice(digit);
                  }}
                >
                  {`$${digit}`}
                </p>
              </div>
            );
          })}
        </div>
      </CustomCardPlainBorder>
      <CustomCardPlainBorder title="Time">
        <h1 className="text-lg w-full text-center border-b-2 text-white border-gray-700 pb-2">{`${seconds} seconds`}</h1>
        <div className="grid grid-cols-12 w-full pt-3 px-2 gap-y-2">
          {timeSecondss.map((second, index) => {
            return (
              <div
                key={index}
                className="col-span-4 flex items-center justify-center cursor-pointer hover:bg-[#0f223b] rounded-sm"
              >
                <p
                  className={`${
                    second === seconds
                      ? "text-white cursor-pointer text-sm mb-1"
                      : " text-gray-500 cursor-pointer text-sm mb-1"
                  }`}
                  onClick={() => {
                    setSecondss(second);
                    setSeconds(second);
                  }}
                >
                  {`${second}`}
                </p>
              </div>
            );
          })}
        </div>
      </CustomCardPlainBorder>
      <CustomCardPlainBorder title="Time UTC-4">
        <p className="text-lg text-center text-white">{formatTime(time)}</p>
      </CustomCardPlainBorder>
    </React.Fragment>
  );
};

export default DashboardDetails;

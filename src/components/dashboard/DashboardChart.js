"use client";
import Image from "next/image";
import CustomButton from "../dynamic/CustomButton";
import Chart from "../../assets/images/Cryptocurrency-chart.png";
import { useEffect, useState } from "react";
import BetSidebar from "../dynamic/BetSideBar";
import DashboardDetails from "./DashboardDetails";
import BetCard from "../dynamic/BetCard";

const DashboardChart = (props) => {
  const { price, seconds } = props;
  const [time, setTime] = useState(new Date());
  const [showBetSidebar, setShowBetSidebar] = useState(false);
  const [betHistory, setBetHistory] = useState([]);

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

  const addNewBet = (betType) => {
    const newBet = {
      price: price,
      seconds: seconds,
      time: formatTime(time),
      betType: betType,
    };
    setBetHistory([...betHistory, newBet]);
  };

  const ShowBetSidebar = (betType) => {
    addNewBet(betType);
    setShowBetSidebar(true);
  };

  return (
    <>
      <div className="h-full w-full flex justify-center gap-[100px] items-center flex-col py-5">
        <BetSidebar
          showSidebar={showBetSidebar}
          setShowSidebar={setShowBetSidebar}
          direction="rtl"
        >
          {betHistory.map((bet, index) => (
            <BetCard key={index} bet={bet} />
          ))}
        </BetSidebar>
        <Image src={Chart} alt="chart" className="rounded-lg px-12" priority />
        <div className="flex sm:flex-row flex-col items-center gap-6 w-full justify-center mb-[40px]">
          <CustomButton
            onClick={() => ShowBetSidebar("higher")}
            className="flex items-center justify-center font-[600] w-full max-w-[190px] px-[24] py-[12px] text-[14px] rounded-[8px] text-white border-none outline-none transition-all delay-75 hover:shadow-[0_0_5px_2px_#31cd86]  bg-[#31cd86]"
          >
            Bet Higher
          </CustomButton>
          <CustomButton
            onClick={() => ShowBetSidebar("lower")}
            className="flex items-center justify-center font-[600] w-full max-w-[190px] px-[24] py-[12px] text-[14px] rounded-[8px] text-white border-none outline-none transition-all delay-75 hover:shadow-[0_0_5px_2px_#f1305f]  bg-[#f1305f]"
          >
            Bet Lower
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default DashboardChart;

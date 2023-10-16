"use client";
import Image from "next/image";
import CustomButton from "../dynamic/CustomButton";
import Chart from "../../assets/images/Cryptocurrency-chart.png";

const DashboardChart = (props) => {
  const { onBet } = props;

  return (
    <>
      <div className="h-full w-full flex justify-between gap-[80px] lg:gap-[100px] items-center flex-col  px-5">
        <Image
          src={Chart}
          alt="chart"
          className="rounded-lg h-full object-cover"
          priority
        />
        <div className="flex items-center gap-6 w-full justify-center ">
          <CustomButton
            onClick={() => onBet("higher")}
            className="flex uppercase items-center justify-center font-[600] w-full max-w-[190px] px-[24] py-[12px] text-[14px] rounded-[8px] text-white border-none outline-none transition-all delay-75 hover:shadow-[0_0_5px_2px_#31cd86]  bg-[#31cd86]"
          >
            Bet Higher
          </CustomButton>
          <CustomButton
            onClick={() => onBet("lower")}
            className="flex uppercase items-center justify-center font-[600] w-full max-w-[190px] px-[24] py-[12px] text-[14px] rounded-[8px] text-white border-none outline-none transition-all delay-75 hover:shadow-[0_0_5px_2px_#f1305f]  bg-[#f1305f]"
          >
            Bet Lower
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default DashboardChart;

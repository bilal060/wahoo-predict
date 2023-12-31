import React from "react";
import CustomInputField from "../dynamic/CustomInputField";
import CustomTabs from "../dynamic/CustomTabs";
import CustomTable from "../dynamic/CustomTable";
import Image from "next/image";
import usd from "../../../node_modules/cryptocurrency-icons/svg/color/usd.svg";
import bts from "../../../node_modules/cryptocurrency-icons/svg/color/bts.svg";
import usdc from "../../../node_modules/cryptocurrency-icons/svg/color/usdc.svg";
import eth from "../../../node_modules/cryptocurrency-icons/svg/color/eth.svg";
import xrp from "../../../node_modules/cryptocurrency-icons/svg/color/xrp.svg";
import ada from "../../../node_modules/cryptocurrency-icons/svg/color/ada.svg";
import atom from "../../../node_modules/cryptocurrency-icons/svg/color/atom.svg";
import sol from "../../../node_modules/cryptocurrency-icons/svg/color/sol.svg";
import trx from "../../../node_modules/cryptocurrency-icons/svg/color/trx.svg";
import ltc from "../../../node_modules/cryptocurrency-icons/svg/color/ltc.svg";
import matic from "../../../node_modules/cryptocurrency-icons/svg/color/matic.svg";
import usdt from "../../../node_modules/cryptocurrency-icons/svg/color/usdt.svg";
import doge from "../../../node_modules/cryptocurrency-icons/svg/color/doge.svg";
import btc from "../../../node_modules/cryptocurrency-icons/svg/color/btc.svg";
import generic from "../../../node_modules/cryptocurrency-icons/svg/color/generic.svg";


const Platform = ({ setPair, pair }) => {
  const tabletheads = ["Status", "Pairs", "Payouts"];

  const tabs = [
    {
      title: "Crypto",
      content: (
        <CustomTable
          thead={tabletheads}
          marketType="crypto"
          setPair={setPair}
        />
      ),
    },
    {
      title: "Forex",
      content: (
        <CustomTable thead={tabletheads} marketType="forex" setPair={setPair} />
      ),
    },
    {
      title: "Stocks-US",
      content: (
        <CustomTable
          thead={tabletheads}
          marketType="stocksus"
          setPair={setPair}
        />
      ),
    },
  ];

  const getImageByType = (type) => {
    switch (type) {
      case "usd":
        return usd;
      case "bts":
        return bts;
      case "usdc":
        return usdc;
      case "eth":
        return eth;
      case "xrp":
        return xrp;
      case "ada":
        return ada;
      case "atom":
        return atom;
      case "sol":
        return sol;
      case "trx":
        return trx;
      case "ltc":
        return ltc;
      case "matic":
        return matic;
      case "usdt":
        return usdt;
      case "doge":
        return doge;
      case "btc":
        return btc;
    }
  };
  const [firstPart, secondPart] = pair
    .split("/")
    .map((part) => part.toLowerCase());

  const image1 = getImageByType(firstPart);
  const image2 = getImageByType(secondPart);
  return (
    <React.Fragment>
      <div className="flex items-center gap-5">
        <div className="flex justify-between gap-3 items-center bg-[#11243d] w-max py-3 px-3 border-0 outline-none rounded-[8px] text-white placeholder:text-gray-400 ">
          <CustomInputField
            type="text"
            placeholder="Search"
            className="bg-transparent w-full border-0 outline-none text-white placeholder:text-gray-400 "
          />

          <svg
            width={20}
            height={21}
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_17130_5573)">
              <path
                d="M12.9167 12.2253H12.2583L12.025 12.0003C12.8417 11.0503 13.3333 9.81693 13.3333 8.47526C13.3333 5.48359 10.9083 3.05859 7.91667 3.05859C4.925 3.05859 2.5 5.48359 2.5 8.47526C2.5 11.4669 4.925 13.8919 7.91667 13.8919C9.25833 13.8919 10.4917 13.4003 11.4417 12.5836L11.6667 12.8169V13.4753L15.8333 17.6336L17.075 16.3919L12.9167 12.2253ZM7.91667 12.2253C5.84167 12.2253 4.16667 10.5503 4.16667 8.47526C4.16667 6.40026 5.84167 4.72526 7.91667 4.72526C9.99167 4.72526 11.6667 6.40026 11.6667 8.47526C11.6667 10.5503 9.99167 12.2253 7.91667 12.2253Z"
                fill="#B4B4B4"
              />
            </g>
            <defs>
              <clipPath id="clip0_17130_5573">
                <rect
                  width={20}
                  height={20}
                  fill="white"
                  transform="translate(0 0.558594)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex text-sm lg:hidden justify-between gap-2 w-max bg-[#11243d] py-3 px-3 border-0 outline-none rounded-[8px] text-white placeholder:text-gray-400">
          <Image
            src={image1}
            alt="currencyIcon"
            className="rounded-full w-4"
            width={5}
            height={5}
          />
          <Image
            src={image2}
            alt="flag"
            className="rounded-full w-4 -translate-x-3"
            width={5}
            height={5}
          />
          <span className="">{pair}</span>
        </div>
      </div>
      <CustomTabs tabs={tabs} />
    </React.Fragment>
  );
};

export default Platform;

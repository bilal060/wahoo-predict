"use client";

import Image from "next/image";
import starIcon from "../../assets/icons/starIcon.svg";
import arrow from "../../assets/icons/down-arrow-icon.svg";
import { useEffect, useState } from "react";
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
import pairIconMapping from "@/assets/icons/PairIcons";

const currencyFlagMapping = {
  TWD: {
    flagUrl: "https://logo.twelvedata.com/forex/twd.png",
  },
  TRY: {
    flagUrl: "https://logo.twelvedata.com/forex/try.png",
  },
  RUB: {
    flagUrl: "https://logo.twelvedata.com/forex/rub.png",
  },
  KRW: {
    flagUrl: "https://logo.twelvedata.com/forex/krw.png",
  },
  AUD: {
    flagUrl: "https://logo.twelvedata.com/forex/aud.png",
  },
  USD: {
    flagUrl: "https://logo.twelvedata.com/forex/usd.png",
  },
  CHF: {
    flagUrl: "https://logo.twelvedata.com/forex/chf.png",
  },
  JPY: {
    flagUrl: "https://logo.twelvedata.com/forex/jpy.png",
  },
  EUR: {
    flagUrl: "https://logo.twelvedata.com/forex/eur.png",
  },
  CAD: {
    flagUrl: "https://logo.twelvedata.com/forex/cad.png",
  },
  GPB: {
    flagUrl: "https://logo.twelvedata.com/forex/gbp.png",
  },
};

const CustomTable = ({ thead, setPair, marketType }) => {
  const [sortStatus, setsortStatus] = useState(null);
  const [sortPairs, setsortPairs] = useState(null);
  const [sortPayouts, setsortPayouts] = useState(null);
  const [crypto, setCrypto] = useState([]);
  const [forex, setForex] = useState([]);
  const [stockus, setStockus] = useState([]);

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

  useEffect(() => {
    const GetAssetsData = async () => {
      try {
        const response = await fetch("https://ethicalbetting.org/assets");
        if (response.ok) {
          const data = await response.json();
          setPair(data[0].name);
          data.forEach((item) => {
            if (item.enabled) {
              if (item.market === "crypto") {
                setCrypto((prevState) => [...prevState, item]);
              } else if (item.market === "forex") {
                setForex((prevState) => [...prevState, item]);
              } else {
                setStockus((prevState) => [...prevState, item]);
              }
            }
          });
        } else {
          console.log("Network response was not ok");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    GetAssetsData();
  }, []);

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
      default:
        return generic;
    }
  };
  const getFlagForCurrency = (currencyCode) => {
    const currencyData = currencyFlagMapping[currencyCode];
    if (currencyData) {
      return (
        <Image
          src={currencyData.flagUrl}
          alt={currencyCode}
          width={4}
          height={4}
        />
      );
    }
    return null;
  };

  return (
    <table className="table-auto w-full text-left lg:text-center text-xs text-gray-400">
      <thead className="pb-5">
        <tr>
          {thead.map((th, index) => {
            return (
              <th key={index} className="pb-4 text-center w-[115px]">
                <div className="flex items-center gap-2 justify-center">
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
        {marketType === "crypto"
          ? crypto.map((item, index) => {
              const [firstPart, secondPart] = item.name.split("/");
              let currencyImage1;
              let currencyImage2;

              if (
                pairIconMapping[firstPart] &&
                pairIconMapping[firstPart].tableHeaders === "forex"
              ) {
                currencyImage1 = pairIconMapping[firstPart];
              } else {
                currencyImage1 = pairIconMapping["GENERIC"];
              }

              if (
                pairIconMapping[secondPart] &&
                pairIconMapping[secondPart].tableHeaders === "forex"
              ) {
                currencyImage2 = pairIconMapping[secondPart];
              } else {
                currencyImage2 = pairIconMapping["GENERIC"];
              }
              return (
                <tr
                  key={index}
                  onClick={() => setPair(item.name)}
                  className="cursor-pointer"
                >
                  <td className="py-2 text-center flex justify-center">
                    <Image src={starIcon} alt="start" />
                  </td>
                  <td className="py-2 text-center ">
                    <div className="flex justify-between gap-2 w-max">
                      <Image
                        src={currencyImage1?.flagUrl}
                        alt="currencyIcon"
                        className="rounded-full w-4"
                        width={5}
                        height={5}
                      />
                      <Image
                        src={currencyImage2?.flagUrl}
                        alt="flag"
                        className="rounded-full w-4 -translate-x-3"
                        width={5}
                        height={5}
                      />
                      <span className="">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-2 text-center">91.0%</td>
                </tr>
              );
            })
          : marketType === "forex"
          ? forex.map((item, index) => {
              const [firstPart, secondPart] = item.name.split("/");
              let currencyImage1;
              let currencyImage2;

              if (
                pairIconMapping[firstPart] &&
                pairIconMapping[firstPart].tableHeaders === "forex"
              ) {
                currencyImage1 = pairIconMapping[firstPart];
              } else {
                currencyImage1 = pairIconMapping["GENERIC"];
              }

              if (
                pairIconMapping[secondPart] &&
                pairIconMapping[secondPart].tableHeaders === "forex"
              ) {
                currencyImage2 = pairIconMapping[secondPart];
              } else {
                currencyImage2 = pairIconMapping["GENERIC"];
              }
              return (
                <tr key={index}>
                  <td className="py-2 text-center flex justify-center">
                    <Image src={starIcon} alt="start" />
                  </td>
                  <td className="py-2 text-center ">
                    <div className="flex justify-between gap-2 w-max">
                      <Image
                        src={currencyImage1?.flagUrl}
                        alt="currencyIcon"
                        className="rounded-full w-4"
                        width={5}
                        height={5}
                      />
                      <Image
                        src={currencyImage2?.flagUrl}
                        alt="flag"
                        className="rounded-full w-4 -translate-x-3"
                        width={5}
                        height={5}
                      />
                      <span className="">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-2 text-center">CHF/JPY91.0%</td>
                </tr>
              );
            })
          : stockus.map((item, index) => (
              <tr key={index}>
                <td className="py-2 text-center flex justify-center">
                  <Image src={starIcon} alt="start" />
                </td>
                <td className="py-2 text-center ">
                  <div className="flex justify-center">{item.name}</div>
                </td>
                <td className="py-2 text-center">CHF/JPY91.0%</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};

export default CustomTable;

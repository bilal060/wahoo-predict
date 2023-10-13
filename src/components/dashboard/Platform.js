import React from "react";
import CustomInputField from "../dynamic/CustomInputField";
import CustomTabs from "../dynamic/CustomTabs";
import CustomTable from "../dynamic/CustomTable";

const Platform = () => {
  const tabletheads = ["Status", "Pairs", "Payouts"];

  const tabs = [
    {
      title: "Crypto",
      content: (
        <CustomTable
          thead={tabletheads}
          tbody={["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]}
        />
      ),
    },
    {
      title: "Forex",
      content: <CustomTable thead={tabletheads} tbody={["", "", "", "", ""]} />,
    },
    {
      title: "Stocks-US",
      content: <CustomTable thead={tabletheads} tbody={["", "", "", "", ""]} />,
    },
  ];

  return (
    <React.Fragment>
      <div className="flex justify-between gap-3 items-center bg-[#11243d] w-full py-3 px-3 border-0 outline-none rounded-[8px] text-white placeholder:text-gray-400 ">
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
      <CustomTabs tabs={tabs} />
    </React.Fragment>
  );
};

export default Platform;

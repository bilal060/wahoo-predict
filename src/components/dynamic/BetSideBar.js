import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import "../../assets/css/animated-sidebar.css";

const BetSidebar = ({ showSidebar, setShowSidebar, direction, children }) => {
  return (
    <React.Fragment>
      <div
        className={`p-3 sidebar-container absolute w-full overflow-y-auto h-[100vh] bg-[#1d3554] z-20  ${
          direction === "ltr"
            ? showSidebar
              ? "enter-left"
              : "exit-left"
            : showSidebar
            ? "enter-right top-0"
            : "exit-right"
        }`}
        style={showSidebar ? { display: "block" } : { display: "none" }}
      >
        <div
          className={`flex ${
            direction === "ltr" ? "justify-end" : "justify-start"
          }`}
        >
          <AiOutlineClose
            className="text-white mb-3 text-2xl cursor-pointer"
            onClick={() => setShowSidebar(false)}
          />
        </div>
        <h1 className="text-white text-2xl text-center w-full">Trades</h1>
        <div className="sm:w-[70%] md:w-[50%] lg:w-[30%] mx-auto ">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BetSidebar;

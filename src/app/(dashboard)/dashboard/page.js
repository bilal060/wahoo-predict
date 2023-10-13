"use client";

import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardDetails from "@/components/dashboard/DashboardDetails";
import Platform from "@/components/dashboard/Platform";
import { useState } from "react";

const Dashboard = () => {
  const [price, setPrice] = useState(1);
  const [seconds, setSecondss] = useState(10);

  return (
    <div className="grid grid-cols-12  h-[calc(100vh-74px)]">
      <div className="xl:col-span-2 col-span-3 sm:hidden lg:block w-full platform-side pl-5">
        <Platform />
      </div>
      <div className="col-span-12 lg:col-span-6 xl:col-span-8 flex items-center justify-center">
        <DashboardChart price={price} seconds={seconds} />
      </div>
      <div className="xl:col-span-2 col-span-3 sm:hidden lg:block dashboard-details-side bg-[#041328] px-3 rounded-tl-[8px]">
        <DashboardDetails setPrice={setPrice} setSecondss={setSecondss} />
      </div>
    </div>
  );
};

export default Dashboard;

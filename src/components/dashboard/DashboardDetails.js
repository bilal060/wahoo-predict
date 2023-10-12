"use client"

import React, { useState } from "react";
import CustomCard from "../dynamic/CustomCard";

const DashboardDetails = () => {
    const [amount, setAmount] = useState(1);
    const [seconds, setSeconds] = useState(10);
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const timeSecondss = [10, 15, 20, 25, 30, 35, 40, 45, 50];
    return (
        <React.Fragment>
            <CustomCard title="Payout">
                <h1 className="text-3xl text-green-500">+91%</h1>
                <p className="text-green-500">$19.25</p>
                <p className='text-gray-500'>Profit</p>
                <p className="text-green-500">+$8.22</p>
            </CustomCard>
            <CustomCard title="Price">
                <h1 className="text-lg">$26812</h1>
            </CustomCard>
            <CustomCard title="Amount">
                <h1 className="text-lg w-full text-center border-b border-gray-700 mb-2">{`$${amount}`}</h1>
                <div className="grid grid-cols-12 w-full">
                    {digits.map((digit, index) => {
                        return <div key={index} className="col-span-4 flex items-center justify-center cursor-pointer">
                            <p className={`${digit === amount ? 'text-gray-500 cursor-pointer text-sm mb-1' : 'cursor-pointer text-sm mb-1'}`} onClick={() => setAmount(digit)}>
                                {`$${digit}`}
                            </p>
                        </div>
                    })}
                </div>
            </CustomCard>
            <CustomCard title="Time">
                <h1 className="text-lg w-full text-center border-b border-gray-700 mb-2">{`${seconds} seconds`}</h1>
                <div className="grid grid-cols-12 w-full">
                    {timeSecondss.map((second, index) => {
                        return <div key={index} className="col-span-4 flex items-center justify-center cursor-pointer">
                            <p className={`${second === seconds ? 'text-gray-500 cursor-pointer text-sm mb-1' : 'cursor-pointer text-sm mb-1'}`} onClick={() => setSeconds(second)}>
                                {`${second}`}
                            </p>
                        </div>
                    })}
                </div>
            </CustomCard>
        </React.Fragment>
    )
}

export default DashboardDetails;
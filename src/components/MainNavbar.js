"use client"

import React, { useState } from "react"
import Dropdown from "./dynamic/Dropdown"
import { GiHamburgerMenu } from 'react-icons/gi';
import AnimatedSidebar from "./dynamic/AnimatedSidebar";
import Platform from "./dashboard/Platform";

const MainNavbar = () => {

    const [showPlatformSidebar, setShowPlatformSidebar] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const items = [
        { route: "/dashboard", title: "Dashboard" },
        { route: "/logout", title: "Logout" },
    ]
    return (
        <React.Fragment>
            <AnimatedSidebar showSidebar={showPlatformSidebar} setShowSidebar={setShowPlatformSidebar} direction="ltr">
                <Platform />
            </AnimatedSidebar>
            {showDetails && <AnimatedSidebar showSidebar={showDetails} setShowSidebar={setShowDetails} direction="rtl">
                Right side panel
            </AnimatedSidebar>}
            <div className="hidden p-5 mobile-sidenavs">
                <GiHamburgerMenu className="text-xl cursor-pointer" onClick={() => setShowPlatformSidebar(true)} />
                <GiHamburgerMenu className="text-xl cursor-pointer" onClick={() => setShowDetails(true)} />
            </div>
            <nav className="flex flex-col md:flex-row items-center justify-between p-5">
                <div className="flex items-center text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
                </div>
                <div className="flex items-center justify-between">
                    <a href="#" className="inline-block mr-3 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Connect Wallet</a>
                    <Dropdown btnTitle="Account" items={items} />
                </div>
            </nav>
        </React.Fragment>
    )
}

export default MainNavbar
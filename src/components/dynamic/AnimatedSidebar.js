import React from "react";
import { AiOutlineClose } from 'react-icons/ai';

import "../../assets/css/animated-sidebar.css";

const AnimatedSidebar = ({ showSidebar, setShowSidebar, direction, children }) => {
    return (
        <React.Fragment>
            <div className={`p-3 sidebar-container absolute w-full h-screen bg-[#011027] z-20 ${direction === 'ltr' ? showSidebar ? 'enter-left' : 'exit-left' : showSidebar ? 'enter-right' : 'exit-right'}`}>
                <div className={`flex ${direction === 'ltr' ? 'justify-end' : 'justify-start'}`}>
                    <AiOutlineClose className="text-white mb-3 text-2xl cursor-pointer" onClick={() => setShowSidebar(false)} />
                </div>
                {children}
            </div>
        </React.Fragment>
    )
}

export default AnimatedSidebar;
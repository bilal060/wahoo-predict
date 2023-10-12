import React from "react";
import CustomInputField from "../dynamic/CustomInputField";
import CustomTabs from "../dynamic/CustomTabs";
import CustomTable from "../dynamic/CustomTable";

const Platform = () => {
    const tabletheads = ['Status', 'Pairs', 'Stocks-US']

    const tabs = [
        { title: "Crypto", content: <CustomTable thead={tabletheads} tbody={["", "", "", "", ""]} /> },
        { title: "Forex", content: "Forex Content" },
        { title: "Stocks-US", content: "Stocks-US Content" },
    ];

    return (
        <React.Fragment>
            <CustomInputField type="text" placeholder="Search" />
            <CustomTabs tabs={tabs} />
        </React.Fragment>
    )
}

export default Platform;
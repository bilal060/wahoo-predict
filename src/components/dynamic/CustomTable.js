
const CustomTable = ({ thead, tbody }) => {
    return (
        <table className="table-auto w-full text-left lg:text-center text-sm text-gray-400">
            <thead className="pb-5">
                <tr>
                    {thead.map((th, index) => {
                        return <th key={index}>{th}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {tbody.map((tr, index) => {
                    return <tr key={index}>
                        <td>Active</td>
                        <td>HKD/CHF</td>
                        <td>93%</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default CustomTable
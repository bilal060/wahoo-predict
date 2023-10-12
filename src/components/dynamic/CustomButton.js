const CustomButton = ({ onClick, children }) => {
    return (
        <button className="flex px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" onClick={onClick}>{children}</button>
    )
}

export default CustomButton;
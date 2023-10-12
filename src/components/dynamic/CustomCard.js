import '../../assets/css/custom-card.css';

const CustomCard = ({ children, title }) => {
    return (
        <div className="custom-card-container bg-[#011026] py-2 my-2 flex items-center justify-center border-2 border-dashed border-gray-700 flex-col rounded">
            <h3 className='text-gray-500'>{title}</h3>
            {children}
        </div>
    )
}

export default CustomCard;
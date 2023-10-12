
const CustomInputField = ({ label, ...props }) => {
    return (
        <div className="mb-3 w-full">
            {label && <label htmlFor={field.name} className={`form-label ${props.specialclass} fw-bold`}>{label}</label>}
            <input className="bg-gray-800 w-full py-3 ps-2 ml-1 rounded" {...props} />
            {/**<ErrorMessage component='small' name={field.name} className='text-danger' />**/}
        </div>
    )
}

export default CustomInputField
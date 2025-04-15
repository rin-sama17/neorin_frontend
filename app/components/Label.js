const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block mr-2 mb-1 font-medium text-md text-gray-700`}
        {...props}>
        {children}
    </label>
)

export default Label

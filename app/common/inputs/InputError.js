import { ErrorMessage } from 'formik'

const InputError = ({ name, className = '', ...props }) => (
    <ErrorMessage
        name={name}
        component="div"
        className={`${className} text-sm text-red-600 font-extralight mt-2`}
        {...props}
    />
)

export default InputError

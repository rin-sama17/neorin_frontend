import { Field } from 'formik'

const Input = ({ disabled = false, className, children, ...props }) => (
    <Field
        disabled={disabled}
        className={`${className}  w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        {...props}>
        {children}
    </Field>
)

export default Input

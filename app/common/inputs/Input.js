import { FastField } from 'formik'
import React from 'react'

const Input = ({
    disabled = false,
    className = '',
    as = 'input',
    children,
    ...props
}) => {
    return (
        <FastField name={props.name}>
            {({ field, meta }) => {
                const commonProps = {
                    ...field,
                    ...props,
                    disabled,
                    className: `${className} input`,
                }

                switch (as) {
                    case 'textarea':
                        return <textarea {...commonProps} />
                    case 'select':
                        return <select {...commonProps}>{children}</select>
                    default:
                        return <input {...commonProps} />
                }
            }}
        </FastField>
    )
}

export default React.memo(Input)

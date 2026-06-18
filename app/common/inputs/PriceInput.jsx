import React from 'react'
import { NumericFormat } from 'react-number-format'

const PriceInput = ({ name, setFieldValue, value }) => {
    return (
        <NumericFormat
            thousandSeparator=","
            customInput="input"
            value={value[name]}
            onValueChange={val => setFieldValue(name, val.formattedValue)}
            name={name}
            placeholder="تومان"
            className="input"
        />
    )
}

export default React.memo(PriceInput)

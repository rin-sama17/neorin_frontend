'use client'

import React from 'react'
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

const DateSelector = ({ value, setFieldValue, name, minDate = '' }) => {
    return (
        <DatePicker
            calendar={persian}
            locale={persian_fa}
            weekDays={['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']}
            format="YYYY/MM/DD"
            value={value}
            minDate={minDate}
            onChange={date =>
                setFieldValue(name, date?.isValid ? date.toDate() : '')
            }
            inputClass="
                        w-full
                        h-12
                        px-4
                        rounded-xl
                        border
                        border-slate-200
                    "
        />
    )
}

export default DateSelector

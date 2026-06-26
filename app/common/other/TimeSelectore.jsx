'use client'

import React from 'react'
import Selector from '../inputs/Selector'
const hours = Array.from({ length: 24 }, (_, i) => ({
    id: i.toString().padStart(2, '0'),
    name: i.toString().padStart(2, '0'),
}))

const minutes = Array.from({ length: 60 }, (_, i) => ({
    id: i.toString().padStart(2, '0'),
    name: i.toString().padStart(2, '0'),
}))

const TimeSelectore = ({ name, values }) => {
    const isSameDay =
        values &&
        values.start_date &&
        values.end_date &&
        new Date(values.start_date).toDateString() ===
            new Date(values.end_date).toDateString()
    const availableHours = isSameDay
        ? hours.filter(h => Number(h.id) >= Number(values.start_hour))
        : hours
    return (
        <div className="grid grid-cols-2 gap-3">
            <Selector
                name={`${name}_hour`}
                options={availableHours}
                label="ساعت"
            />
            <Selector name={`${name}_minute`} options={minutes} label="دقیقه" />
        </div>
    )
}

export default TimeSelectore

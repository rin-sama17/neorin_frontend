export const combineDateTime = (date, hour, minute) => {
    if (!date) return ''

    const d = new Date(date)

    d.setHours(Number(hour))
    d.setMinutes(Number(minute))
    d.setSeconds(0)

    return d.toISOString()
}

export default function converterToJalali(date, showTime = false) {
    if (!date) return null

    const d = new Date(date)

    const datePart = d.toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        calendar: 'persian',
    })

    if (!showTime) return datePart

    const timePart = d.toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
    })
    return `${datePart}-${timePart}`
}

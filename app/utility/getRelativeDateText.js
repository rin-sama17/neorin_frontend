export const getRelativeDateText = date => {
    if (!date) return ''

    const target = new Date(date)

    const today = new Date()

    today.setHours(0, 0, 0, 0)
    target.setHours(0, 0, 0, 0)

    const diffDays = Math.round((target - today) / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return 'امروز'
    if (diffDays === 1) return 'فردا'
    if (diffDays === 2) return 'پس‌فردا'

    if (diffDays > 2 && diffDays <= 7) {
        return `${diffDays} روز دیگر`
    }

    return target.toLocaleDateString('fa-IR')
}

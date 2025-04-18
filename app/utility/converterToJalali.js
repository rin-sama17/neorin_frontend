export default function converterToJalali(date) {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        calender: 'persian',
    }

    const jalaliDate = new Date(date).toLocaleDateString('fa-IR', options)
    return jalaliDate
}

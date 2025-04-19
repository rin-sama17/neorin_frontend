import Link from 'next/link'
import SettingList from './SettingList'

export async function getSetting() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/setting`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            cache: 'no-store',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت تنظیمات')
    }

    return res.json()
}
const page = async () => {
    const setting = await getSetting()
    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت تنظیمات ها</h1>
                <Link href="/admin/setting/edit" className="btn btn-primary">
                    ویرایش تنظیمات
                </Link>
                <SettingList setting={setting} />
            </div>
        </div>
    )
}

export default page

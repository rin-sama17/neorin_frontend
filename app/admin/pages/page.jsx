import React from 'react'
import PageList from './PageList'
import Link from 'next/link'

const page = async () => {
    let pages
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/content/page`,
            {
                headers: {
                    Accept: 'application/json',
                },
                cache: 'no-store',
            },
        )

        if (!res.ok) {
            throw new Error('خطا در دریافت  صفحه ها')
        }
        pages = await res.json()

        if (!pages.status) {
            throw new Error('خطا در دریافت  صفحه ها')
        }
    } catch (err) {
        console.log(err)
    }
    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت صفحه ها</h1>
                <Link href="/admin/pages/create" className="btn btn-success">
                    ساخت صفحه جدید
                </Link>

                <PageList pages={pages} />
            </div>
        </div>
    )
}

export default page

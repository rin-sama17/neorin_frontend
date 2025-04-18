import React from 'react'
import AttributeList from './AttributeList'
import Link from 'next/link'

const page = async () => {
    let attributes
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category-attribute`,
            {
                headers: {
                    Accept: 'application/json',
                },
                cache: 'no-store',
            },
        )

        if (!res.ok) {
            throw new Error('خطا در دریافت نسبت ها')
        }
        attributes = await res.json()

        if (!attributes.status) {
            throw new Error('خطا در دریافت نسبت ها')
        }
    } catch (err) {
        console.log(err)
    }
    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت نسبت ها</h1>
                <Link
                    href="/admin/category-attribute/create"
                    className="btn btn-success">
                    ساخت نسبت جدید
                </Link>

                <AttributeList attributes={attributes} />
            </div>
        </div>
    )
}

export default page

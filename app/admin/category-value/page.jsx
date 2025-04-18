import React from 'react'
import CategoryValueList from './CategoryValueList'
import Link from 'next/link'

const page = async () => {
    let categoryValues
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category-value`,
            {
                headers: {
                    Accept: 'application/json',
                },
                cache: 'no-store',
            },
        )

        if (!res.ok) {
            throw new Error('خطا در دریافت مقدار دسته بندی ها')
        }
        categoryValues = await res.json()

        if (!categoryValues.status) {
            throw new Error('خطا در دریافت مقدار دسته بندی ها')
        }
    } catch (err) {
        console.log(err)
    }
    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت مقدار دسته بندی ها</h1>
                <Link
                    href="/admin/category-value/create"
                    className="btn btn-success">
                    ساخت مقدار جدید
                </Link>

                <CategoryValueList categoryValues={categoryValues} />
            </div>
        </div>
    )
}

export default page

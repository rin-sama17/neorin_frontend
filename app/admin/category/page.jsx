import React from 'react'
import CategoryList from './CategoryList'
import LinkButton from '../../components/LinkButton'
import Link from 'next/link'

const page = async () => {
    let categories
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category`,
            {
                headers: {
                    Accept: 'application/json',
                },
                cache: 'no-store',
            },
        )

        if (!res.ok) {
            throw new Error('خطا در دریافت دسته بندی ها')
        }
        categories = await res.json()

        if (!categories.status) {
            throw new Error('خطا در دریافت دسته بندی ها')
        }
    } catch (err) {
        console.log(err)
    }
    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت دسته بندی ها</h1>
                <Link href="/admin/category/create" className="btn btn-success">
                    ساخت دسته بندی جدید
                </Link>

                <CategoryList categories={categories} />
            </div>
        </div>
    )
}

export default page

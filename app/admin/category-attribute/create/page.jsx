import React from 'react'
import CreateAttributeForm from './CreateAttributeForm'

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
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ساخت نسبت جدید</h2>
            <CreateAttributeForm categories={categories} />
        </div>
    )
}

export default page

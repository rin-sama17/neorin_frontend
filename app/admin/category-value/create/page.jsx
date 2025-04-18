import React from 'react'
import CreateCategoryValueForm from './CreateCategoryValueForm'

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
            throw new Error('خطا در دریافت نسبت')
        }
        attributes = await res.json()

        if (!attributes.status) {
            throw new Error('خطا در دریافت نسبت')
        }
    } catch (err) {
        console.log(err)
    }
    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ساخت مقدار جدید</h2>
            <CreateCategoryValueForm attributes={attributes} />
        </div>
    )
}

export default page

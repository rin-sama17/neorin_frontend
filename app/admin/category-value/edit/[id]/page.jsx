import React from 'react'
import UpdateCategoryValueForm from './UpdateCategoryValueForm'

async function getCategoryValue(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category-value/${id}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            cache: 'no-store',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت مقدار')
    }

    return res.json()
}
async function getAttributes() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category-attribute`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            cache: 'force-cache',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت نسبت ها')
    }

    return res.json()
}
const page = async ({ params }) => {
    let { id } = await params

    const attributes = await getAttributes()
    const categoryValue = await getCategoryValue(id)

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش نسبت</h2>
            <UpdateCategoryValueForm
                attributes={attributes}
                categoryValue={categoryValue.data}
            />
        </div>
    )
}

export default page

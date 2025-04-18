import React from 'react'
import UpdateAttributeForm from './UpdateAttributeForm'

async function getAttribute(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category-attribute/${id}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            cache: 'no-store',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت نسبت')
    }

    return res.json()
}
async function getCategories() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            cache: 'force-cache',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت دسته بندی ها')
    }

    return res.json()
}
const page = async ({ params }) => {
    let { id } = await params

    const categories = await getCategories()
    const attribute = await getAttribute(id)

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش نسبت</h2>
            <UpdateAttributeForm
                categories={categories}
                attribute={attribute.data}
            />
        </div>
    )
}

export default page

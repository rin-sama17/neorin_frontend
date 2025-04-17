import React from 'react'
import UpdateCategoryForm from './UpdateCategoryForm'

async function getCategory(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/category/${id}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            cache: 'no-store',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت دسته بندی')
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
    console.log(categories)
    const category = await getCategory(id)

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش دسته بندی</h2>
            <UpdateCategoryForm
                categories={categories}
                category={category.data}
            />
        </div>
    )
}

export default page

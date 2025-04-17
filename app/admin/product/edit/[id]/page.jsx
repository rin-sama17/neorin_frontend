import React from 'react'
import UpdateProductForm from './UpdateProductForm'
async function getProduct(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/products/${id}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            cache: 'no-store',
        },
    )
    if (!res.ok) {
        throw new Error('خطا در دریافت محصول')
    }

    return res.json()
}
async function getCities() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cities`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            cache: 'no-store',
        },
    )

    if (!res.ok) {
        throw new Error('خطا در دریافت شهر ها')
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
    const { id } = params
    const product = await getProduct(id)
    const categories = await getCategories()
    const cities = await getCities()

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش محصول</h2>
            <UpdateProductForm
                categories={categories}
                cities={cities}
                product={product.data}
            />
        </div>
    )
}

export default page

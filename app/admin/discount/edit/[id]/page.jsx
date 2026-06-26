import { getCategories, getDiscount, getProducts } from '@/admin/services'
import React from 'react'
import UpdateDiscountForm from './UpdateDiscountForm'

const page = async ({ params }) => {
    let { id } = await params
    const products = await getProducts()
    const categories = await getCategories()
    const discount = await getDiscount(id)

    return (
        <UpdateDiscountForm
            discount={discount.data}
            categories={categories}
            products={products}
        />
    )
}

export default page

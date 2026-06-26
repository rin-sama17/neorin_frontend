import { getCategories, getProducts } from '@/admin/services'
import React from 'react'
import CreateDiscountForm from './CreateDiscountForm'

const page = async () => {
    const products = await getProducts()
    const categories = await getCategories()

    return <CreateDiscountForm categories={categories} products={products} />
}

export default page

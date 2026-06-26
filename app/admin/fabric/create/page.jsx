import { getCategories, getColors, getProducts } from '@/admin/services'
import React from 'react'
import CreateFabricForm from './CreateFabricForm'

const page = async () => {
    const products = await getProducts()
    const categories = await getCategories()
    const colors = await getColors()
    return (
        <CreateFabricForm
            categories={categories}
            colors={colors}
            products={products}
        />
    )
}

export default page

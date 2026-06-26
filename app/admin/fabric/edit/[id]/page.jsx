import {
    getCategories,
    getColors,
    getFabric,
    getProducts,
} from '@/admin/services'
import React from 'react'
import CreateFabricForm from './CreateFabricForm'

const page = async ({ params }) => {
    let { id } = await params
    const fabric = await getFabric(id)
    const products = await getProducts()
    const categories = await getCategories()
    const colors = await getColors()
    return (
        <CreateFabricForm
            categories={categories}
            colors={colors}
            products={products}
            fabric={fabric}
        />
    )
}

export default page

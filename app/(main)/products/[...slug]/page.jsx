import { getProduct } from '@/(main)/services'
import React from 'react'
import ProductDetails from '@/components/products/ProductDetails'

const page = async ({ params }) => {
    const { slug } = await params
    const product = await getProduct(slug[1])
    return (
        <div className="container">
            <ProductDetails product={product.data} />
        </div>
    )
}

export default page

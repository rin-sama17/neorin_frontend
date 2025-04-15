import React from 'react'
import ProductList from './ProductList'
import Link from 'next/link'

const page = async () => {
    let products
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/product/products`,
            {
                headers: {
                    Accept: 'application/json',
                },
                cache: 'no-store',
            },
        )

        if (!res.ok) {
            throw new Error('خطا در دریافت محصولات')
        }
        products = await res.json()
        if (!products.status) {
            throw new Error('خطا در دریافت محصولات')
        }
    } catch (err) {
        console.log(err)
    }
    return (
        <dev className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت محصولات</h1>
                <Link href="/admin/product/create" className="btn btn-success">
                    ساخت محصول جدید
                </Link>

                <ProductList products={products.data} />
            </div>
        </dev>
    )
}

export default page

import ProductList from './ProductList'
import Link from 'next/link'
import { getProducts } from '@/admin/services'

const page = async () => {
    const products = await getProducts()
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-semibold">مدیریت محصولات</h1>
                <Link
                    href="/admin/product/create"
                    className="btn btn-secondary">
                    <i className="fa-solid fa-plus" />
                    <span>محصول جدید</span>
                </Link>
            </div>

            <ProductList products={products.data} />
        </div>
    )
}

export default page

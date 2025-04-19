import { getProducts } from '../services'
import ProductList from './ProductList'
import Link from 'next/link'

const page = async () => {
    const products = await getProducts()
    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت محصولات</h1>
                <Link href="/panel/product/create" className="btn btn-success">
                    ساخت محصول جدید
                </Link>

                <ProductList products={products.data} />
            </div>
        </div>
    )
}

export default page

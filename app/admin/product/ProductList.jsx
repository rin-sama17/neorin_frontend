'use client'
import { converterToJalali, useAdminRequest } from '../services'
import Link from 'next/link'

const ProductList = ({ products }) => {
    const { deleteProduct } = useAdminRequest()

    const getStatus = status => {
        if (status === 0) return 'غیرفعال'
        if (status === 1) return 'فعال'
        if (status === 2) return 'در انتظار تایید'
    }

    return (
        <div>
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2 text-right">شناسه</th>
                        <th className="border px-4 py-2 text-right">نام</th>
                        <th className="border px-4 py-2 text-right">قیمت</th>
                        <th className="border px-4 py-2 text-right">دسته</th>
                        <th className="border px-4 py-2 text-right">توضیحات</th>
                        <th className="border px-4 py-2 text-right">
                            نوع محصول
                        </th>
                        <th className="border px-4 py-2 text-right">وضعیت</th>
                        <th className="border px-4 py-2 text-right">تاریخ</th>
                        <th className="border px-4 py-2 text-right">عملیات</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                        <tr className="hover:bg-gray-50" key={product.id}>
                            <td className="border px-4 py-2 text-right">
                                {product.id}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {product.title}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {product.price
                                    ? product.price
                                    : 'مایل به معاوضه'}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {product.category
                                    ? product.category.name
                                    : 'دسته حذف شده'}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {product.description}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {product.product_type}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {getStatus(product.status)}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                {converterToJalali(product.created_at)}{' '}
                            </td>
                            <td className="border px-4 py-2 text-right">
                                <Link
                                    href={`/admin/product/edit/${product.id}`}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                                    <i className="fa fa-edit"></i>
                                </Link>
                                <button
                                    onClick={() =>
                                        deleteProduct({ productId: product.id })
                                    }
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList

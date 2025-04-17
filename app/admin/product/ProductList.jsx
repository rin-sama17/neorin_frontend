'use client'
import Table from '../../common/Table'
import ConfirmAllert from '../../components/ConfirmAllert'
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
        <Table
            headers={[
                'شناسه',
                'نام',
                'قیمت',
                'دسته',
                'توضیحات',
                'نوع محصول',
                'وضعیت',
                'تاریخ',
                'عملیات',
            ]}>
            {products.map(product => (
                <tr className="hover:bg-gray-50" key={product.id}>
                    <td className="border px-4 py-2 text-right">
                        {product.id}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {product.title}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {product.price ? product.price : 'مایل به معاوضه'}
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
                            className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded ml-2">
                            <i className="fa fa-edit"></i>
                        </Link>
                        <Link
                            href={`/admin/product/gallery/${product.id}`}
                            className="bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded ml-2">
                            <i className="fa fa-photo"></i>
                        </Link>
                        <ConfirmAllert
                            title="حذف محصول"
                            helper={`ایا از حذف محصول ${product.name} مطمعن هستید`}
                            onConfirm={() =>
                                deleteProduct({ productId: product.id })
                            }
                        />
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default ProductList

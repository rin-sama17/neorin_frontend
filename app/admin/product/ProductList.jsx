import Table from '@/common/other/Table'
import Link from 'next/link'
import { converterToJalali } from '@/utility'
import DeleteProduct from './DeleteProduct'
import DiscountManager from './DiscountManager'

const ProductList = ({ products }) => {
    const getStatus = status => {
        if (status === 0)
            return { text: 'غیرفعال', color: 'bg-red-50 text-red-700' }
        if (status === 1)
            return { text: 'فعال', color: 'bg-green-50 text-green-700' }
        if (status === 3)
            return {
                text: 'در انتظار تایید',
                color: 'bg-yellow-50 text-yellow-700',
            }
    }

    return (
        <Table headers={['#', 'محصول', 'دسته', 'قیمت', 'وضعیت', 'تاریخ', '']}>
            {products.map(product => (
                <tr
                    key={product.id}
                    className="border-b hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-3 text-sm">{product.id}</td>

                    <td className="px-3 py-3">
                        <div>
                            <p className="font-medium text-sm">
                                {product.title}
                            </p>

                            <p className=" text-slate-500">
                                {product.material}
                            </p>
                        </div>
                    </td>

                    <td className="px-3 py-3 text-sm text-slate-600">
                        {product.category?.name || '-'}
                    </td>

                    <td className="px-3 py-3 text-sm font-medium">
                        {Number(product.price).toLocaleString()}
                    </td>

                    <td className="px-3 py-3">
                        <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs  ${
                                getStatus(product.status).color
                            }`}>
                            {getStatus(product.status).text}
                        </span>
                    </td>

                    <td className="px-3 py-3  text-slate-500">
                        {converterToJalali(product.created_at)}
                    </td>

                    <td className="px-3 py-3">
                        <div className="flex items-center gap-1">
                            <Link
                                href={`/admin/product/edit/${product.id}`}
                                className="icon-btn  hover:text-blue-600 hover:bg-blue-50">
                                <i className="fa-solid fa-pen " />
                            </Link>

                            <Link
                                href={`/admin/product/gallery/${product.id}`}
                                className="icon-btn hover:text-green-600 hover:bg-green-50">
                                <i className="fa-solid fa-images " />
                            </Link>
                            <DiscountManager productId={product.id} />
                            <DeleteProduct
                                id={product.id}
                                name={product.title}
                            />
                        </div>
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default ProductList

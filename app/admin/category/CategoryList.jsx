'use client'
import { converterToJalali, useAdminRequest } from '../services'
import Link from 'next/link'
import ConfirmAllert from '../../components/ConfirmAllert'
import Table from '../../common/Table'

const CategoryList = ({ categories }) => {
    const { deleteCategory } = useAdminRequest()

    const getParentName = parentId => {
        const parent = categories.data.find(cat => cat.id === parentId)
        return parent ? parent.name : 'دسته اصلی'
    }

    const handleDelete = async categoryId => {
        deleteCategory({ categoryId })
    }
    return (
        <Table
            headers={[
                'شناسه',
                'نام',
                'دسته پدر',
                'توضیحات',
                'وضعیت',
                'تاریخ',
                'عملیات',
            ]}>
            {categories.data.map(category => (
                <tr className="hover:bg-gray-50" key={category.id}>
                    <td className="border px-4 py-2 text-right">
                        {category.id}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {category.name}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {getParentName(category.parent_id)}{' '}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {category.description}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {category.status === 1 ? 'فعال' : 'غیرفعال'}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {converterToJalali(category.created_at)}{' '}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        <Link
                            href={`/admin/category/edit/${category.id}`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                            <i className="fa fa-edit"></i>
                        </Link>
                        <ConfirmAllert
                            title="حذف دسته بندی"
                            helper={`ایا از حذف دسته بندی ${category.name} مطمعن هستید`}
                            onConfirm={() => handleDelete(category.id)}
                        />
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default CategoryList

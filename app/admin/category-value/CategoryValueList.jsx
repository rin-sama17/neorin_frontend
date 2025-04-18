'use client'
import Link from 'next/link'
import ConfirmAllert from '@/components/ConfirmAllert'
import Table from '@/common/Table'
import { useCategoryValueRequest } from '@/hooks/admin/useCategoryValueRequest'
import { converterToJalali } from '@/utility'

const CategoryValueList = ({ categoryValues }) => {
    const { deleteCategoryValue } = useCategoryValueRequest()

    const handleDelete = async categoryValueId => {
        deleteCategoryValue({ categoryValueId })
    }
    return (
        <Table
            headers={[
                'شناسه',
                ' نسبت دسته بندی',
                'مقدار',
                'نوع',
                'وضعیت',
                'تاریخ',
                'عملیات',
            ]}>
            {categoryValues.data.map(values => (
                <tr className="hover:bg-gray-50" key={values.id}>
                    <td className="border px-4 py-2 text-right">{values.id}</td>
                    <td className="border px-4 py-2 text-right">
                        {values.categoryAttribute?.name}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {values.value}
                    </td>

                    <td className="border px-4 py-2 text-right">
                        {values.type === 1 ? 'متن' : 'انتخاب'}
                    </td>

                    <td className="border px-4 py-2 text-right">
                        {values.status === 1 ? 'فعال' : 'غیرفعال'}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {converterToJalali(values.created_at)}{' '}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        <Link
                            href={`/admin/category-value/edit/${values.id}`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                            <i className="fa fa-edit"></i>
                        </Link>
                        <ConfirmAllert
                            title="حذف مقدار"
                            helper={`ایا از حذف مقدار مطمعن هستید`}
                            onConfirm={() => handleDelete(values.id)}
                        />
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default CategoryValueList

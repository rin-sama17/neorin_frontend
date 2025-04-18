'use client'
import { converterToJalali, useAdminRequest } from '../services'
import Link from 'next/link'
import ConfirmAllert from '../../components/ConfirmAllert'
import Table from '../../common/Table'

const AttributeList = ({ attributes }) => {
    const { deleteAttribute } = useAdminRequest()

    const handleDelete = async attributeId => {
        deleteAttribute({ attributeId })
    }
    return (
        <Table
            headers={[
                'شناسه',
                'نام',
                'دسته بندی',
                'نوع',
                'واحد',
                'وضعیت',
                'تاریخ',
                'عملیات',
            ]}>
            {attributes.data.map(attribute => (
                <tr className="hover:bg-gray-50" key={attribute.id}>
                    <td className="border px-4 py-2 text-right">
                        {attribute.id}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {attribute.name}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {attribute.category.name}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {attribute.type === 1 ? 'متن' : 'انتخاب'}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {attribute.unit}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {attribute.status === 1 ? 'فعال' : 'غیرفعال'}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {converterToJalali(attribute.created_at)}{' '}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        <Link
                            href={`/admin/category-attribute/edit/${attribute.id}`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                            <i className="fa fa-edit"></i>
                        </Link>
                        <ConfirmAllert
                            title="حذف نسبت"
                            helper={`ایا از حذف نسبت ${attribute.name} مطمعن هستید`}
                            onConfirm={() => handleDelete(attribute.id)}
                        />
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default AttributeList

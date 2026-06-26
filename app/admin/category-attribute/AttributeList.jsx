import Link from 'next/link'
import Table from '@/common/other/Table'
import { converterToJalali } from '@/utility'
import DeleteAttribute from './delete/DeleteAttribute'

const AttributeList = ({ attributes }) => {
    const getStatus = status => {
        if (status === 1)
            return { text: 'فعال', color: 'bg-green-50 text-green-700' }
        return { text: 'غیرفعال', color: 'bg-red-50 text-red-700' }
    }

    return (
        <Table
            headers={[
                '#',
                'نام',
                'دسته بندی',
                'نوع',
                'واحد',
                'وضعیت',
                'تاریخ',
                '',
            ]}>
            {attributes.data.map(attribute => (
                <tr
                    key={attribute.id}
                    className="border-b hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-3 text-sm">{attribute.id}</td>

                    <td className="px-3 py-3">
                        <p className="font-medium text-sm">{attribute.name}</p>
                    </td>

                    <td className="px-3 py-3 text-sm text-slate-600">
                        {attribute.category.name}
                    </td>

                    <td className="px-3 py-3 text-sm text-slate-600">
                        {attribute.type === 1 ? 'متن' : 'انتخاب'}
                    </td>

                    <td className="px-3 py-3 text-sm text-slate-600">
                        {attribute.unit}
                    </td>

                    <td className="px-3 py-3">
                        <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs ${getStatus(attribute.status).color}`}>
                            {getStatus(attribute.status).text}
                        </span>
                    </td>

                    <td className="px-3 py-3 text-slate-500">
                        {converterToJalali(attribute.created_at)}
                    </td>

                    <td className="px-3 py-3">
                        <div className="flex items-center gap-1">
                            <Link
                                href={`/admin/category-attribute/edit/${attribute.id}`}
                                className="icon-btn hover:text-blue-600 hover:bg-blue-50">
                                <i className="fa-solid fa-pen" />
                            </Link>
                            <DeleteAttribute
                                id={attribute.id}
                                name={attribute.name}
                            />
                        </div>
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default AttributeList

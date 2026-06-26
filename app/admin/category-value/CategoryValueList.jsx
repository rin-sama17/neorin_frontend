import Link from 'next/link'
import Table from '@/common/other/Table'
import { converterToJalali } from '@/utility'
import DeleteAttributeValue from './delete/DeleteAttributeValue'

const CategoryValueList = ({ categoryValues }) => {
    const getStatus = status => {
        if (status === 1)
            return { text: 'فعال', color: 'bg-green-50 text-green-700' }
        return { text: 'غیرفعال', color: 'bg-red-50 text-red-700' }
    }

    return (
        <Table
            headers={[
                '#',
                'نسبت دسته بندی',
                'مقدار',
                'نوع',
                'وضعیت',
                'تاریخ',
                '',
            ]}>
            {categoryValues.data.map(values => (
                <tr
                    key={values.id}
                    className="border-b hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-3 text-sm">{values.id}</td>

                    <td className="px-3 py-3">
                        <p className="font-medium text-sm">
                            {values.categoryAttribute?.name}
                        </p>
                    </td>

                    <td className="px-3 py-3 text-sm text-slate-600">
                        {values.value}
                    </td>

                    <td className="px-3 py-3 text-sm text-slate-600">
                        {values.type === 1 ? 'متن' : 'انتخاب'}
                    </td>

                    <td className="px-3 py-3">
                        <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs ${getStatus(values.status).color}`}>
                            {getStatus(values.status).text}
                        </span>
                    </td>

                    <td className="px-3 py-3 text-slate-500">
                        {converterToJalali(values.created_at)}
                    </td>

                    <td className="px-3 py-3">
                        <div className="flex items-center gap-1">
                            <Link
                                href={`/admin/category-value/edit/${values.id}`}
                                className="icon-btn hover:text-blue-600 hover:bg-blue-50">
                                <i className="fa-solid fa-pen" />
                            </Link>
                            <DeleteAttributeValue id={values.id} />
                        </div>
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default CategoryValueList

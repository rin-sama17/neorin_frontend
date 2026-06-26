import Link from 'next/link'
import Table from '@/common/other/Table'
import { converterToJalali } from '@/utility'
import DeletePage from './delete/DeletePage'

const PageList = ({ pages }) => {
    const getStatus = status => {
        if (status === 1)
            return { text: 'فعال', color: 'bg-green-50 text-green-700' }
        return { text: 'غیرفعال', color: 'bg-red-50 text-red-700' }
    }

    return (
        <Table headers={['#', 'عنوان', 'بدنه', 'وضعیت', 'تاریخ', '']}>
            {pages.data.map(page => (
                <tr
                    key={page.id}
                    className="border-b hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-3 text-sm">{page.id}</td>

                    <td className="px-3 py-3">
                        <p className="font-medium text-sm">{page.title}</p>
                    </td>

                    <td className="px-3 py-3 max-w-52">
                        <p className="text-sm text-slate-500 line-clamp-2">
                            {page.body}
                        </p>
                    </td>

                    <td className="px-3 py-3">
                        <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs ${
                                getStatus(page.status).color
                            }`}>
                            {getStatus(page.status).text}
                        </span>
                    </td>

                    <td className="px-3 py-3 text-slate-500">
                        {converterToJalali(page.created_at)}
                    </td>

                    <td className="px-3 py-3">
                        <div className="flex items-center gap-1">
                            <Link
                                href={`/admin/pages/edit/${page.id}`}
                                className="icon-btn hover:text-blue-600 hover:bg-blue-50">
                                <i className="fa-solid fa-pen" />
                            </Link>

                            <DeletePage id={page.id} name={page.title} />
                        </div>
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default PageList

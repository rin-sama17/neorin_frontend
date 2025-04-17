'use client'
import { converterToJalali, useAdminRequest } from '../services'
import Link from 'next/link'
import ConfirmAllert from '../../components/ConfirmAllert'
import Table from '../../common/Table'

const PageList = ({ pages }) => {
    const { deletePage } = useAdminRequest()

    const handleDelete = async pageId => {
        deletePage({ pageId })
    }
    return (
        <Table headers={['شناسه', 'نام', 'بدنه', 'وضعیت', 'تاریخ', 'عملیات']}>
            {pages.data.map(page => (
                <tr className="hover:bg-gray-50" key={page.id}>
                    <td className="border px-4 py-2 text-right">{page.id}</td>
                    <td className="border px-4 py-2 text-right">
                        {page.title}
                    </td>

                    <td className="border px-4 py-2 text-right max-w-52">
                        <h6 className="line-clamp-2"> {page.body}</h6>
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {page.status === 1 ? 'فعال' : 'غیرفعال'}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {converterToJalali(page.created_at)}{' '}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        <Link
                            href={`/admin/pages/edit/${page.id}`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                            <i className="fa fa-edit"></i>
                        </Link>
                        <ConfirmAllert
                            title="حذف صفحه"
                            helper={`ایا از حذف صفحه ${page.title} مطمعن هستید`}
                            onConfirm={() => handleDelete(page.id)}
                        />
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default PageList

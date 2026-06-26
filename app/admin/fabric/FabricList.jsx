'use client'
import Link from 'next/link'
import Table from '@/common/other/Table'
import { converterToJalali } from '@/utility'
import DeleteFabric from './delete/DeleteFabric'

const FabricList = ({ fabrics }) => {
    const getStatus = status => {
        if (status === 1)
            return { text: 'فعال', color: 'bg-green-50 text-green-700' }
        return { text: 'غیرفعال', color: 'bg-red-50 text-red-700' }
    }

    return (
        <Table
            headers={[
                '#',
                'پارچه',
                'دسته',
                'رنگ',
                'قیمت',
                'وضعیت',
                'تاریخ',
                '',
            ]}>
            {fabrics.data.map(fabric => (
                <tr
                    key={fabric.id}
                    className="border-b hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-3 text-sm">{fabric.id}</td>

                    <td className="px-3 py-3">
                        <div>
                            <p className="font-medium text-sm">
                                {fabric.title}
                            </p>
                            <p className="text-slate-500">{fabric.material}</p>
                        </div>
                    </td>

                    <td className="px-3 py-3 text-sm text-slate-600">
                        {fabric.category?.name || '-'}
                    </td>

                    <td className="px-3 py-3 text-sm text-slate-600">
                        {fabric.color || '-'}
                    </td>

                    <td className="px-3 py-3 text-sm font-medium">
                        {Number(fabric.price).toLocaleString()}
                    </td>

                    <td className="px-3 py-3">
                        <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs ${getStatus(fabric.status).color}`}>
                            {getStatus(fabric.status).text}
                        </span>
                    </td>

                    <td className="px-3 py-3 text-slate-500">
                        {converterToJalali(fabric.created_at)}
                    </td>

                    <td className="px-3 py-3">
                        <div className="flex items-center gap-1">
                            <Link
                                href={`/admin/fabric/edit/${fabric.id}`}
                                className="icon-btn hover:text-blue-600 hover:bg-blue-50">
                                <i className="fa-solid fa-pen" />
                            </Link>
                            <DeleteFabric id={fabric.id} name={fabric.title} />
                        </div>
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default FabricList

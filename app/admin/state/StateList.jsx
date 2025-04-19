'use client'
import Link from 'next/link'
import ConfirmAllert from '@/components/ConfirmAllert'
import Table from '@/common/Table'
import { useStateRequest } from '@/hooks/admin/useStateRequest'
import { converterToJalali } from '@/utility'

const StateList = ({ states }) => {
    const { deleteState } = useStateRequest()

    const getParentName = parentId => {
        const parent = states.data.find(state => state.parent_id === parentId)
        return parent ? parent.name : 'محل اصلی'
    }

    const handleDelete = async stateId => {
        deleteState({ stateId })
    }
    return (
        <Table
            headers={[
                'شناسه',
                'نام',
                'توضیحات',
                'محل پدر',
                'وضعیت',
                'تاریخ',
                'عملیات',
            ]}>
            {states.data.map(state => (
                <tr className="hover:bg-gray-50" key={state.id}>
                    <td className="border px-4 py-2 text-right">{state.id}</td>
                    <td className="border px-4 py-2 text-right">
                        {state.name}
                    </td>

                    <td className="border px-4 py-2 text-right max-w-52">
                        <h6 className="line-clamp-2"> {state.description}</h6>
                    </td>
                    <td className="border px-4 py-2 text-right max-w-52">
                        <h6 className="line-clamp-2">
                            {getParentName(state.id)}
                        </h6>
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {state.status === 1 ? 'فعال' : 'غیرفعال'}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {converterToJalali(state.created_at)}{' '}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        <Link
                            href={`/admin/state/edit/${state.id}`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                            <i className="fa fa-edit"></i>
                        </Link>
                        <ConfirmAllert
                            title="حذف صفحه"
                            helper={`ایا از حذف صفحه ${state.name} مطمعن هستید`}
                            onConfirm={() => handleDelete(state.id)}
                        />
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default StateList

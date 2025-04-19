'use client'
import Link from 'next/link'
import ConfirmAllert from '@/components/ConfirmAllert'
import Table from '@/common/Table'
import { useUserRequest } from '@/hooks/admin/useUserRequest'
import { converterToJalali } from '@/utility'

const UserList = ({ users }) => {
    console.log(users)
    const { deleteUser } = useUserRequest()

    const handleDelete = async userId => {
        deleteUser({ userId })
    }
    return (
        <Table
            headers={[
                'شناسه',
                'نام',
                'نوع کاربر',
                'وضعیت',
                'تاریخ ورود',
                'تاریخ تایید شماره',
                'عملیات',
            ]}>
            {users.data.map(user => (
                <tr className="hover:bg-gray-50" key={user.id}>
                    <td className="border px-4 py-2 text-right">{user.id}</td>
                    <td className="border px-4 py-2 text-right">{user.name}</td>
                    <td className="border pxcolor-4 py-2 text-right">
                        {user.type === 1 ? 'ادمین' : 'کاربر'}
                    </td>

                    <td className="border pxcolor-4 py-2 text-right">
                        {user.is_active === 1 ? 'فعال' : 'غیرفعال'}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {converterToJalali(user.created_at)}{' '}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        {user.mobile_verified_at
                            ? converterToJalali(user.mobile_verified_at)
                            : 'تایید نشده'}{' '}
                    </td>
                    <td className="border px-4 py-2 text-right">
                        <Link
                            href={`/admin/users/edit/${user.id}`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                            <i className="fa fa-edit"></i>
                        </Link>
                        <ConfirmAllert
                            title="حذف کاربر"
                            helper={`ایا از حذف کاربر مطمعن هستید`}
                            onConfirm={() => handleDelete(user.id)}
                        />
                    </td>
                </tr>
            ))}
        </Table>
    )
}

export default UserList

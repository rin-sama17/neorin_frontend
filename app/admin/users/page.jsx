import UserList from './UserList'
import { getUsers } from '@/admin/services'

const page = async () => {
    const users = await getUsers()
    return (
        <div className="w-full">
            <div className="p-4">
                <h1 className="text-xl mb-4">مدیریت کاربر ها</h1>

                <UserList users={users} />
            </div>
        </div>
    )
}

export default page

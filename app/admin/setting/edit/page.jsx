import UpdateUserForm from './[id]/UpdateUserForm'
import { getUser } from '@/admin/services'

const page = async ({ params }) => {
    let { id } = await params
    const page = await getUser(id)

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش صفحه</h2>
            <UpdateUserForm page={page.data} />
        </div>
    )
}

export default page

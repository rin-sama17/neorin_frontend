import UpdatePageForm from './UpdatePageForm'
import { getPage } from '@/admin/services'

const page = async ({ params }) => {
    let { id } = await params
    const page = await getPage(id)

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش صفحه</h2>
            <UpdatePageForm page={page.data} />
        </div>
    )
}

export default page

import UpdatePageForm from './UpdatePageForm'
import { getPage } from '@/admin/services'

const page = async ({ params }) => {
    let { id } = await params
    const page = await getPage(id)

    return (
        <div className="w-full ">
            <UpdatePageForm page={page.data} />
        </div>
    )
}

export default page

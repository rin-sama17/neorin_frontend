import UpdateAttributeForm from './UpdateAttributeForm'
import { getCategories, getAttribute } from '@/admin/services'

const page = async ({ params }) => {
    let { id } = await params

    const categories = await getCategories()
    const attribute = await getAttribute(id)

    return (
        <div className="w-full ">
            <UpdateAttributeForm
                categories={categories}
                attribute={attribute.data}
            />
        </div>
    )
}

export default page

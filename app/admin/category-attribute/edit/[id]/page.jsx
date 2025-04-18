import UpdateAttributeForm from './UpdateAttributeForm'
import { getCategories, getAttribute } from '@/admin/services'

const page = async ({ params }) => {
    let { id } = await params

    const categories = await getCategories()
    const attribute = await getAttribute(id)

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش نسبت</h2>
            <UpdateAttributeForm
                categories={categories}
                attribute={attribute.data}
            />
        </div>
    )
}

export default page

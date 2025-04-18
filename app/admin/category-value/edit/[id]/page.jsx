import UpdateCategoryValueForm from './UpdateCategoryValueForm'
import { getAttributes, getCategoryValue } from '@/admin/services'

const page = async ({ params }) => {
    let { id } = await params

    const attributes = await getAttributes()
    const categoryValue = await getCategoryValue(id)

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش نسبت</h2>
            <UpdateCategoryValueForm
                attributes={attributes}
                categoryValue={categoryValue.data}
            />
        </div>
    )
}

export default page

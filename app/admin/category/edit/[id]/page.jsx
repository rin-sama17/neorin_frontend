import UpdateCategoryForm from './UpdateCategoryForm'
import { getCategories, getCategory } from '@/admin/services'

const page = async ({ params }) => {
    let { id } = await params

    const categories = await getCategories()
    const category = await getCategory(id)

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش دسته بندی</h2>
            <UpdateCategoryForm
                categories={categories}
                category={category.data}
            />
        </div>
    )
}

export default page

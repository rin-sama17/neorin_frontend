import CreateCategoryForm from './CreateCategoryForm'
import { getCategories } from '@/admin/services'

const page = async () => {
    const categories = await getCategories()
    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ساخت دسته بندی جدید</h2>
            <CreateCategoryForm categories={categories} />
        </div>
    )
}

export default page

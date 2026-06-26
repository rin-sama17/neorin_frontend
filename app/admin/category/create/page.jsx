import CreateCategoryForm from './CreateCategoryForm'
import { getCategories } from '@/admin/services'

const page = async () => {
    const categories = await getCategories()
    return (
        <div>
            <CreateCategoryForm categories={categories} />
        </div>
    )
}

export default page

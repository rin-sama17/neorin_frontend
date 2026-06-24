import UpdateCategoryForm from './UpdateCategoryForm'
import { getCategories, getCategory } from '@/admin/services'

const page = async ({ params }) => {
    let { id } = await params

    const categories = await getCategories()
    const category = await getCategory(id)

    return (
         <div >
   <UpdateCategoryForm
                categories={categories}
                category={category.data}
            />
</div>
     
    )
}

export default page

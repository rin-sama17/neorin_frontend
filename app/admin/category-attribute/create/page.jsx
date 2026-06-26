import CreateAttributeForm from './CreateAttributeForm'
import { getCategories } from '@/admin/services'

const page = async () => {
    const categories = await getCategories()
    return (
        <div className="w-full ">
            <CreateAttributeForm categories={categories} />
        </div>
    )
}

export default page

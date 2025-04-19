import CreateProductForm from './CreateProductForm'
import { getCategories, getCities } from '@/panel/services'

const page = async () => {
    const categories = await getCategories()
    const cities = await getCities()

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ساخت محصول جدید</h2>
            <CreateProductForm categories={categories} cities={cities} />
        </div>
    )
}

export default page

import CreateProductForm from './CreateProductForm'
import {
    getCategories,
    getCities,
    getColors,
    getFabrics,
} from '@/admin/services'

const page = async () => {
    const categories = await getCategories()
    const cities = await getCities()
    const fabrics = await getFabrics()
    const colors = await getColors()

    return (
        <div>
            <CreateProductForm
                categories={categories}
                cities={cities}
                fabrics={fabrics}
                colors={colors}
            />
        </div>
    )
}

export default page

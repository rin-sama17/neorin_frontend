import UpdateProductForm from './UpdateProductForm'
import {
    getProduct,
    getCategories,
    getCities,
    getColors,
    getFabrics,
} from '@/admin/services'

const page = async ({ params }) => {
    const { id } = params
    const product = await getProduct(id)
    const categories = await getCategories()
    const cities = await getCities()
    const fabrics = await getFabrics()
    const colors = await getColors()

    return (
        <div className="w-full ">
            <UpdateProductForm
                categories={categories}
                cities={cities}
                fabrics={fabrics}
                colors={colors}
                product={product.data}
            />
        </div>
    )
}

export default page

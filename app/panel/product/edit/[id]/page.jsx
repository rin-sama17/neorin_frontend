import { getCategories, getCities, getProduct } from '@/panel/services'
import UpdateProductForm from './UpdateProductForm'

const page = async ({ params }) => {
    const { id } = params
    const product = await getProduct(id)
    const categories = await getCategories()
    const cities = await getCities()

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">ویرایش محصول</h2>
            <UpdateProductForm
                categories={categories}
                cities={cities}
                product={product.data}
            />
        </div>
    )
}

export default page

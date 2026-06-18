import { getProducts } from '../../../(main)/services'
import ProductSlider from './ProductSlider'

const ProductGrid = async () => {
    const products = await getProducts()
    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-medium mb-4">محصولات ویژه</h2>

            <ProductSlider products={products.data} />
        </section>
    )
}

export default ProductGrid

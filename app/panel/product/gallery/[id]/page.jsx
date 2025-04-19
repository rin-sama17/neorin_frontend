import { getProduct } from '@/panel/services'
import GalleryUploader from './GalleryUploader'
import LinkButton from '@/components/LinkButton'

const page = async ({ params }) => {
    const { id } = params
    const product = await getProduct(id)

    return (
        <div className="w-full ">
            <h2 className="text-xl mt-2 mr-2">مدیریت گالری</h2>
            <h2 className="text-lg text-gray-400 mt-2 mr-2">
                نام محصول : {product.data.title}
            </h2>
            <LinkButton
                title="رفتن به صفحه ویرایش محصول"
                href={`/panel/product/edit/${product.data.id}`}
            />
            <GalleryUploader product={product.data} />
        </div>
    )
}

export default page

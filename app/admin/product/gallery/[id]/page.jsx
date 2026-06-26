import GalleryUploader from './GalleryUploader'
import Link from 'next/link'
import { getProduct } from '@/admin/services'

const page = async ({ params }) => {
    const { id } = params
    const product = await getProduct(id)
    const data = product.data

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-[15px] font-medium text-text-primary">
                        مدیریت گالری
                    </h1>
                    <p className="text-[13px] text-text-muted mt-0.5">
                        {data.title}
                    </p>
                </div>
                <Link
                    href={`/admin/product/edit/${data.id}`}
                    className=" btn btn-primary">
                    ویرایش محصول
                </Link>
            </div>

            <GalleryUploader product={data} />
        </div>
    )
}

export default page

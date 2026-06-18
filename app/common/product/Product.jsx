import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = ({ product }) => {
    console.log(product)
    const opacityClass =
        product.gallery && product.gallery.length > 0
            ? 'transition-opacity delay-200 opacity-100 group-hover:opacity-0'
            : ''

    console.log(product.gallery[0]?.currentImage)
    return (
        <Link
            href={`/products/${product.slug}/${product.id}`}
            className=" bg-white rounded-neu shadow-neu block     hover:bg-slate-100 transition-all">
            <div className="flex flex-col">
                {product.is_special == 1 && (
                    <div className="p-1 rounded-full bg-red-500  border-black border absolute top-3 right-3 ">
                        <p className="font-bold text-white">ویژه</p>
                    </div>
                )}

                {product.image && (
                    <div className="relative w-full h-72 group ">
                        {product.gallery && product.gallery.length > 0 && (
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.gallery[0].url.currentImage}`}
                                width={230}
                                height={270}
                                alt={product.slug}
                                className="z-10 border-2 opacity-90 absolute top-0  border-gray-300 w-full h-72 rounded-md object-cover mb-2"
                            />
                        )}
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.image.currentImage}`}
                            width={230}
                            height={270}
                            alt={product.slug}
                            className={`relative z-20 border-2 ${opacityClass} border-gray-300 w-full h-72  rounded-md object-cover mb-2`}
                        />
                    </div>
                )}
                <div className="p-2 h-36 space-y-2 flex flex-col">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <div>
                        <p className="text-gray-600 mt-2 line-clamp-2">
                            {product.product_status}
                        </p>

                        {product.price && (
                            <span className="text-gray-500 font-bold">
                                {product.price} تومان
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Product

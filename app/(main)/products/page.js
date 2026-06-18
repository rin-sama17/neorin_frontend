'use client'

import React, { useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'

const ProductDetail = () => {
    const images = [
        '/images/product1.jpg',
        '/images/product2.jpg',
        '/images/product3.jpg',
        '/images/product4.jpg',
    ]

    const [selectedImage, setSelectedImage] = useState(images[0])

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <InnerImageZoom
                            src={selectedImage}
                            zoomType="hover"
                            zoomScale={1.5}
                            className="w-full h-auto object-cover"
                            alt="تصویر محصول"
                        />
                    </div>
                    <div className="mt-4">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={4}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="w-full">
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        onClick={() => setSelectedImage(img)}
                                        className={`cursor-pointer border p-1 rounded ${
                                            selectedImage === img
                                                ? 'border-blue-500'
                                                : 'border-gray-300'
                                        }`}>
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="object-cover w-full h-24 rounded"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4">نام محصول</h1>
                    <p className="text-gray-600 mb-4">
                        توضیحات جامع محصول. این بخش شامل ویژگی‌ها، مشخصات فنی و
                        جزئیات مهم محصول است.
                    </p>
                    <div className="mb-6">
                        <span className="text-2xl text-blue-600 font-bold">
                            1,299,000 تومان
                        </span>
                    </div>
                    <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors duration-300">
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">محصولات مشابه</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                        <div
                            key={item}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={`/images/similar${item}.jpg`}
                                alt={`محصول مشابه ${item}`}
                                className="w-full h-32 object-cover rounded-t-lg"
                            />
                            <div className="p-2">
                                <h3 className="text-sm font-semibold">
                                    نام محصول {item}
                                </h3>
                                <p className="text-xs text-blue-600 font-bold mt-1">
                                    799,000 تومان
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail

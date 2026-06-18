'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import Product from '@/common/product/Product'

const ProductSlider = ({ products }) => {
    return (
        <section className="mb-8 w-full">
            <Swiper
                slidesPerView={1}
                spaceBetween={16}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className="shadow-lg">
                {products.length > 0 &&
                    products.map((product, index) => (
                        <SwiperSlide key={index} className="!w-60">
                            <Product product={product} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    )
}

export default ProductSlider

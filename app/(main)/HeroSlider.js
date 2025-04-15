'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-cards'

import { Autoplay } from 'swiper/modules'

const HeroSlider = () => (
    <section className="mb-8">
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}>
            <SwiperSlide>
                <div className="bg-orange-300 w-full h-96"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-blue-300 w-full h-96"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-green-300 w-full h-96"></div>
            </SwiperSlide>
        </Swiper>
    </section>
)

export default HeroSlider

'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-cards'

import { Autoplay } from 'swiper/modules'
import Slider from './Slider'

const SliderSwiper = ({ sliders }) => {
    return (
        <section className="mb-8">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="shadow-lg">
                {sliders.length > 0 &&
                    sliders.map((slider, index) => (
                        <SwiperSlide key={index}>
                            <Slider slider={slider} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    )
}

export default SliderSwiper

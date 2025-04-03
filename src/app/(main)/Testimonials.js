'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-cards'

import { Autoplay, EffectCards } from 'swiper/modules'

const Testimonials = () => (
    <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6">نظرات مشتریان</h2>
            <section className="mb-8 flex justify-center ">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="w-80 h-96">
                    {[1, 2, 3, 4, 5, 6].map((value, key) => (
                        <SwiperSlide key={key}>
                            <div className="bg-white border-2 rounded-lg shadow-xl border-gray-500 w-full h-full flex flex-col items-center justify-center">
                                <i className="fa fa-user-circle fa-3x mb-2 text-gray-500"></i>
                                <h6 className=" text-slate-950 text-xl font-bold">{`کاربر ${value}`}</h6>
                                <p className=" text-gray-700 mt-4 font-semibold">
                                    "فروشگاه من تجربه خرید عالی است. محصولات با
                                    کیفیت و ارسال به موقع."
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    </section>
)

export default Testimonials

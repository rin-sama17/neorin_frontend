'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import ShowImage from '@/common/image/ShowImage'

const GallerySlider = ({ gallery, slug, image }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    return (
        <div className="flex flex-col p-4 items-center w-full">
            <Swiper
                modules={[Navigation, Thumbs]}
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper }} // اتصال به اسلایدر کوچک
                className="w-full mb-4 relative">
                <SwiperSlide>
                    <ShowImage
                        alt={slug}
                        src={image.indexArray.large}
                        width={800}
                        height={600}
                        className="rounded h-[500px] object-cover w-full"
                        priority
                    />
                </SwiperSlide>

                {gallery.slice(0, 5).map((image, index) => (
                    <SwiperSlide key={index}>
                        <ShowImage
                            alt={`${slug}-${index}`}
                            src={image.url.indexArray.large}
                            width={800}
                            height={600}
                            className="rounded h-[500px] object-cover w-full"
                        />
                    </SwiperSlide>
                ))}

                <div className="absolute p-2 rounded-md z-50 bottom-0 text-white text-xl left-0 backdrop-brightness-50 flex justify-center items-center align-middle">
                    <i className="fa fa-expand ml-2"></i>
                    {gallery.length + 1}
                </div>
            </Swiper>

            {/* Thumbnail Swiper */}
            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress
                slidesPerView={5}
                spaceBetween={10}
                className="w-full">
                <SwiperSlide className="swiper-slide-thumb ">
                    <ShowImage
                        alt={`${slug}-thumb`}
                        src={image.indexArray.small}
                        width={100}
                        height={100}
                        className="rounded  h-20 w-20 object-cover"
                    />
                </SwiperSlide>
                {gallery.slice(0, 5).map((image, index) => (
                    <SwiperSlide key={index} className="swiper-slide-thumb ">
                        <ShowImage
                            alt={`${slug}-thumb-${index}`}
                            src={image.url.indexArray.small}
                            width={100}
                            height={100}
                            className="rounded h-20 w-20 object-cover "
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default GallerySlider

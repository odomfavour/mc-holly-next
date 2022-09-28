import React from "react"
import Image from "next/image"
import { mainGal1 } from "../components/appData"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper React components

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper"

const GallerySlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={8}
      navigation
      autoplay
      modules={[Pagination, Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is <= 999px
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        999: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div>
          <div className="mb-3 columns-2 md:columns-4 lg:columns-6">
            {mainGal1.map((item: any) => {
              const { image, id, title } = item
              return (
                <div
                  className="relative min-h-[140px] mb-3 break-inside-avoid"
                  key={id}
                >
                  <Image
                    src={`${image.src}`}
                    objectFit="cover"
                    layout="fill"
                    priority
                    className="rounded-tr-md rounded-tl-md object-top hover:scale-110 transition-all duration-150 ease-out delay-50"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="mb-3 columns-2 md:columns-4 lg:columns-6">
            {mainGal1.map((item: any) => {
              const { image, id, title } = item
              return (
                <div
                  className="relative min-h-[140px] mb-3 break-inside-avoid"
                  key={id}
                >
                  <Image
                    src={`${image.src}`}
                    objectFit="cover"
                    layout="fill"
                    priority
                    className="rounded-tr-md rounded-tl-md object-top hover:scale-110 transition-all duration-150 ease-out delay-50"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="mb-3 columns-2 md:columns-4 lg:columns-6">
            {mainGal1.map((item: any) => {
              const { image, id, title } = item
              return (
                <div
                  className="relative min-h-[140px] mb-3 break-inside-avoid"
                  key={id}
                >
                  <Image
                    src={`${image.src}`}
                    objectFit="cover"
                    layout="fill"
                    priority
                    className="rounded-tr-md rounded-tl-md object-top hover:scale-110 transition-all duration-150 ease-out delay-50"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default GallerySlider

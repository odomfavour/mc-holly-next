import React, { useState } from "react"
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { sponsors } from "./appData"
// Import Swiper React components

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper"

// Import Swiper styles
import "swiper/css"
SwiperCore.use([Autoplay]);
const Sponsor = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto" id="sponsors">
        <div className="py-6 mb-20">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-7/12 w-full">
              <div className="flex md:flex-row flex-col items-center justify-end mr-0 md:mr-8">
                <div className="flex items-center justify-center py-5">
                  <FaPhoneAlt className="mr-3" />
                  <div className="flex flex-col md:flex-row gap-2">
                    <p> +234 00000000000</p>
                    <p>+234 00000000000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-5/12 lg:w-5/12 w-full lg:border-l-2 md:border-l-2 lg:border-t-0 border-t-2  py-5 border-black">
              <p className="flex items-center md:justify-start justify-center ml-8">
                <FaEnvelope /> <span className="ml-3">mcholly@mcholly.com</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center md:text-5xl text-2xl mb-4">Sponsors</h3>
          <p className="text-center text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="sponsor-slider my-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={8}
            navigation
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              375: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              // when window width is <= 999px
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              999: {
                slidesPerView: 8,
                spaceBetween: 10,
              },
            }}
            onSlideChange={() => {return; console.log("slide change")}}
            onSwiper={(swiper) => {return; console.log(swiper)}}
          >
            {sponsors.map((sponsor) => {
              const { id, image } = sponsor
              return (
                <SwiperSlide key={id}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={image}
                      width="100px"
                      height="100px"
                      objectFit="contain"
                      priority
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Sponsor

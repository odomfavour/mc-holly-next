import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper React components

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper"
import Link from "next/link"
import artiste from "../pages/artistes"
import { artistes } from "./appData"

const PerformingArtiste = () => {
  return (
    <section className="min-h-screen bg-artiste-hero bg-cover bg-center">
      <div className="w-11/12 mx-auto">
        <div className="pt-20">
          <h3 className="text-center mb-10 font-semibold md:text-5xl text-2xl text-white">
            Performing Artistes
          </h3>
        </div>
        <div className="py-[100px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
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
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {artistes.map((artiste) => {
              const { id, name, role } = artiste
              return (
                <SwiperSlide key={id}>
                  <div className="artiste-box border-solid  border rounded-xl border-[#ABABAB] px-12 py-[55px] hover:bg-[#EFEDED] bg-white">
                    <div className="image-box">
                      <img
                        src="/artistes/artiste.png"
                        alt=""
                        className="h-[180px] w-[180px] rounded-full object-cover mx-auto"
                      />
                    </div>
                    <div className="artiste-info text-center">
                      <h3 className="text-[32px] font-medium text-[#1F1F1F] my-3">
                        {name}
                      </h3>
                      <p className="font-normal text-2xl text-[#5D5FEF]">
                        {role}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className="flex justify-center items-center mt-12">
            <Link href="/artistes">
              <button className="py-[12px] px-6 border-2 border-white rounded-lg text-white">
                SEE ALL
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerformingArtiste

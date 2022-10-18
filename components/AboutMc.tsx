import React from "react"
import Image from "next/image"
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper React components

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper"

const AboutMc = () => {
  return (
    <section className="bg-[#EDE6EC] min-h-screen" id="aboutMC">
      <div className="w-11/12 mx-auto">
        <div className="py-20">
          <h3 className="text-center mb-10 font-semibold  md:text-5xl text-2xl">
            About MC Holly
          </h3>
          <div className="flex gap-8 flex-col lg:flex-row">
            <div className="lg:w-6/12 w-full flex justify-center flex-col">
              <p className="md:text-base text-base mb-5">
                <span className="font-bold">Holly Okosin George</span> is a
                renowned Compere, Presenter, and Comedian who has actively been
                in the entertainment industry, with experience spanning oven 10
                years.
              </p>
              {/* <p className="md:text-base text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                aliquam nisl, eget risus. Id sapien amet condimentum vitae,
                turpis id tellus eget nulla. Semper blandit justo, feugiat
                sagittis turpis morbi. Consectetur sit vitae, lobortis odio eu.
                Nec, vulputate sit amet rhoncus ac egestas vel, dolor. Cras sit
                volutpat pharetra varius nibh nunc pellentesque lorem urna.
                Volutpat donec enim sit nisl augue tristique blandit.
              </p> */}
              <div className="social-links flex mt-5">
                <div className="rounded-full bg-white w-[64px] h-[64px] flex justify-center items-center mr-3">
                  <FaFacebookSquare className="text-[#2252CC] text-2xl" />
                </div>
                <div className="rounded-full bg-white w-[64px] h-[64px] flex justify-center items-center mr-3">
                  <FaLinkedin className="text-2xl text-[#0A66C2]" />
                </div>
                <div className="rounded-full bg-white w-[64px] h-[64px] flex justify-center items-center">
                  <FaTwitter className="text-2xl text-[#55ACEE]" />
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 w-full">
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
                  <Image
                    src="/MCHolly_Single.jpg"
                    width={768}
                    height={643}
                    objectFit="contain"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/MCHolly_Single1.jpg"
                    width={768}
                    height={643}
                    objectFit="contain"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/MCHolly_Single2.jpg"
                    width={768}
                    height={643}
                    objectFit="contain"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/MCHolly_Single3.jpg"
                    width={768}
                    height={643}
                    objectFit="contain"
                    priority
                  />
                </SwiperSlide>
              </Swiper>
              {/* <img src="/mc.png" alt="" className='w-full h-[500px] object-cover object-center' /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMc

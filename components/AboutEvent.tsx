import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper React components

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper"

const AboutEvent = () => {
  return (
    <section id="aboutEvent">
      <div className="w-11/12 mx-auto">
        <div className="py-20">
          <h3 className="text-center mb-10 font-semibold  md:text-5xl text-2xl">
            About event
          </h3>
          <div className="flex gap-8 flex-col lg:flex-row">
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
                    src="/about-event.png"
                    width={800}
                    height={650}
                    objectFit="contain"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/about-event.png"
                    width={800}
                    height={650}
                    objectFit="contain"
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/about-event.png"
                    width={800}
                    height={650}
                    objectFit="contain"
                    priority
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="lg:w-6/12 w-full flex items-center">
              <div>
                <p className="text-base mb-5">
                  Holly's Era is a comedy driven entertainment brand based in
                  Akwa Ibom state. Our Goal is to promote our entertainment
                  culture and to creatively explore opportunities for developing
                  talented Nigerian youths in Akwa Ibom state and beyond.
                </p>
                <p className="text-base mb-5">
                  We actively pursue our goal by discovering talents, organizing
                  shows and performing at special occasions on invitation.
                </p>
                <p className="text-base mb-5">
                  Our shows are exclusively packaged for decent and mature
                  minds, void of discrimination against certain elements that
                  define our humanity such as race, status, principles, gender,
                  age, religion, political affiliations... etc
                </p>
                <p className="text-base mb-5">
                  The mission is to use comedy business as a vehicle to drive
                  innovation and creativity for sustainable youth capacity
                  development in the Akwa Ibom state entertainment industry and
                  tourism sector.
                </p>
                <p className="text-base">
                  The vision is to become one of the foremost internationally
                  recognized comedy and entertainment brands in Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutEvent

import React from "react"
import { FaLink, FaMapMarkerAlt } from "react-icons/fa"
import Image from "next/image"
import { hotels } from "./appData"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper React components

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper"
const Accommodation = () => {
  return (
    <section className="bg-[#E6D1DC] min-h-screen pb-20" id="accommodation">
      <div className="w-11/12 mx-auto">
        <div className="pt-20">
          <h3 className="text-center mb-10 font-semibold  md:text-5xl text-2xl">
            Accommodation
          </h3>
        </div>

        <div>
          <h3 className="text-[#821072] font-medium md:text-[32px] text-[20px] md:mb-4 mb-2">
            Coming from outside Uyo?
          </h3>
          <p className="text-base font-normal mb-4">
            Here are some hotels you can lodge for affordable prices
          </p>
          <div className="md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 hidden">
            {hotels.map((hotel) => {
              const { id, name, link, address, image, price } = hotel
              return (
                <div className="bg-white rounded-md" key={id}>
                  <Image
                    src={`${image.src}`}
                    width={600}
                    height={200}
                    objectFit="cover"
                    priority
                    className="rounded-tr-md rounded-tl-md"
                  />
                  <div className="p-6">
                    <h4 className="font-medium text-[18px]">{name}</h4>
                    <p className="text-[14px] my-1">{address}</p>
                    <p className="mb-2">
                      <span className="text-[#821072]">₦{price}</span> avg/night
                    </p>

                    <div className="flex justify-between items-center">
                      <a href={link} target="_blank">
                        <p className="rounded-md flex items-center bg-[#2252CC] py-1 px-4  text-white cursor-pointer">
                          Book <FaLink className="ml-2" />
                        </p>
                      </a>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="text-[#2252CC]" />
                        <Link href="#">
                          <p className="text-[#2252CC] text-[14px]">
                            Uyo, Akwa Ibom
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* <div className="bg-white rounded-md">
              <Image
                src="/monty.png"
                width={600}
                height={200}
                objectFit="cover"
                className="rounded-tr-md rounded-tl-md"
              />
              <div className="p-6">
                <h4 className="font-medium text-[18px]">Monty Suites</h4>
                <p className="text-[14px] my-1">
                  37 General Edet Akpan Avenue, 520231 Uyo
                </p>
                <p className="mb-2">
                  <span className="text-[#821072]">₦68,000</span> avg/night
                </p>
                <button className="rounded-md flex items-center bg-[#2252CC] py-1 px-4  text-white">
                  Book <FaLink className="ml-2" />
                </button>
              </div>
            </div> */}
          </div>

          <div className="md:hidden">
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
              onSlideChange={() => {return; console.log("slide change")}}
              onSwiper={(swiper) => {return; console.log(swiper)}}
            >
              {hotels.map((hotel) => {
                const { id, name, link, address, image, price } = hotel
                return (
                  <SwiperSlide key={id}>
                    <div className="bg-white rounded-md">
                      <Image
                        src={`${image.src}`}
                        width={600}
                        height={200}
                        objectFit="cover"
                        priority
                        className="rounded-tr-md rounded-tl-md"
                      />
                      <div className="p-6">
                        <h4 className="font-medium text-[18px]">{name}</h4>
                        <p className="text-[14px] my-1">{address}</p>
                        <p className="mb-2">
                          <span className="text-[#821072]">₦{price}</span>{" "}
                          avg/night
                        </p>

                        <div className="flex justify-between items-center">
                          <Link href={link}>
                            <p className="rounded-md flex items-center bg-[#2252CC] py-1 px-4  text-white cursor-pointer">
                              Book <FaLink className="ml-2" />
                            </p>
                          </Link>
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="text-[#2252CC]" />
                            <Link href="#">
                              <p className="underline text-[#2252CC] text-[14px] cursor-pointer">
                                kjdfkjdfjkdf
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accommodation

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

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
            <div className="lg:w-6/12 w-full">
              <p className="text-base mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                aliquam nisl, eget risus. Id sapien amet condimentum vitae,
                turpis id tellus eget nulla. Semper blandit justo, feugiat
                sagittis turpis morbi. Consectetur sit vitae, lobortis odio eu.
                Nec, vulputate sit amet rhoncus ac egestas vel, dolor. Cras sit
                volutpat pharetra varius nibh nunc pellentesque lorem urna.
                Volutpat donec enim sit nisl augue tristique blandit.
              </p>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                aliquam nisl, eget risus. Id sapien amet condimentum vitae,
                turpis id tellus eget nulla. Semper blandit justo, feugiat
                sagittis turpis morbi. Consectetur sit vitae, lobortis odio eu.
                Nec, vulputate sit amet rhoncus ac egestas vel, dolor. Cras sit
                volutpat pharetra varius nibh nunc pellentesque lorem urna.
                Volutpat donec enim sit nisl augue tristique blandit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;

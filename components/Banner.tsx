import dynamic from "next/dynamic"
import Link from "next/link"
import React from "react"
import { BsFillCalendarFill } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"
import { RiTicketFill } from "react-icons/ri"
const Countdown = dynamic(() => import("./CountdownComponent"), { ssr: false })

const Banner = () => {
  return (
    <section className="text-white bg-hero-pattern bg-cover bg-bottom min-h-screen py-8">
      <div className="pt-24">
        <h3 className="lg:text-8xl text-2xl text-center">HOLLY’S ERA 3</h3>
        <p className="text-center md:w-2/6 w-10/12 mx-auto text-base">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
          aliquam nisl, eget risus. Id sapien amet. */}
        </p>
        <div className="lg:w-[36%] w-11/12 mx-auto mt-8 text-center">
          <div className="flex lg:flex-row flex-col-reverse justify-between text-center gap-6">
            <div className="flex items-center justify-center lg:justify-start">
              <BsFillCalendarFill className="text-[#FFFF40] text-xl mr-2" />
              <p className="md:text-xl text-base font-medium">
                18TH NOVEMBER 2022
              </p>
            </div>
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="text-[#FFFF40] text-xl mr-2" />
              <a target="_blank" href="https://goo.gl/maps/wP433hvZUddq2JuW7">
                <p className="md:text-xl text-base font-medium uppercase">
                  Emerald Event Center, Uyo
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] w-11/12 mx-auto mt-8 text-center">
          <p className="mt-5 mb-3 text-center">Event starts in</p>
          <div className="lg:w-full md:w-8/12 w-11/12 mx-auto">
            <Countdown />
          </div>
          <div className="mt-20 flex justify-center">
            <Link href="/ticket">
              <p className="flex items-center bg-[#942828] md:px-[64px] md:py-[24px] px-[32px] py-3 md:text-[18px] text-base cursor-pointer">
                {" "}
                BUY TICKETS NOW{" "}
                <span className="ml-3">
                  <RiTicketFill className="text-3xl" />
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

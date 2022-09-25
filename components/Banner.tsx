import Link from "next/link";
import React from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import {RiTicketFill } from "react-icons/ri"

const Banner = () => {
  return (
    <section className="text-white bg-hero-pattern bg-cover bg-bottom min-h-screen py-8">
      <div className="pt-24">
        <h3 className="lg:text-8xl text-2xl text-center">HOLLY’S ERA 3</h3>
        <p className="text-center md:w-2/6 w-10/12 mx-auto text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
          aliquam nisl, eget risus. Id sapien amet.
        </p>
        <div className="lg:w-[35%] w-11/12 mx-auto mt-8 text-center">
          <div className="flex lg:flex-row flex-col-reverse justify-between text-center gap-6">
            <div className="flex items-center justify-center md:justify-start">
              <BsFillCalendarFill className="text-[#FFFF40] text-xl mr-2" />
              <p className="md:text-xl text-base font-medium">20TH SEPTEMBER 2022</p>
            </div>
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="text-[#FFFF40] text-xl mr-2" />
              <p className="md:text-xl text-base font-medium">TROPICANA MALL, UYO</p>
            </div>
          </div>
          <p className="mt-5 mb-3 text-center">Event starts in</p>
          <div className="flex justify-between items-center">
            <div className="md:w-[100px] md:h-[100px] w-[59px] h-[69px] bg-[#ffffff4c] rounded-md flex justify-center items-center text-center">
                <div>
                <h3 className="md:text-4xl text-base">28</h3>
                <p className="md:text-[18px] text-[14px]">Days</p>
                </div>
            </div>
            <div className="md:w-[100px] md:h-[100px] w-[59px] h-[69px] bg-[#ffffff4c] rounded-md flex justify-center items-center text-center">
                <div>
                <h3 className="md:text-4xl text-base">28</h3>
                <p className="md:text-[18px] text-[14px]">Days</p>
                </div>
            </div>
            <div className="md:w-[100px] md:h-[100px] w-[59px] h-[69px] bg-[#ffffff4c] rounded-md flex justify-center items-center text-center">
                <div>
                <h3 className="md:text-4xl text-base">28</h3>
                <p className="md:text-[18px] text-[14px]">Days</p>
                </div>
            </div>
            <div className="md:w-[100px] md:h-[100px] w-[59px] h-[69px] bg-[#ffffff4c] rounded-md flex justify-center items-center text-center">
                <div>
                <h3 className="md:text-4xl text-base">28</h3>
                <p className="md:text-[18px] text-[14px]">Days</p>
                </div>
            </div>
          </div>
          <div className="mt-20 flex justify-center">
            <Link href="/ticket">
            <p className="flex items-center bg-[#942828] md:px-[64px] md:py-[24px] px-[32px] py-3 md:text-[18px] text-base cursor-pointer"> BUY TICKETS NOW <span className="ml-3"><RiTicketFill className="text-3xl"/></span></p>
            </Link>
            
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

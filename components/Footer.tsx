import React, { useEffect, useState } from "react";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const [year, setYear] = useState(0);
  const getYear = () => {
    const d = new Date();
    let currentYear = d.getFullYear();
    setYear(currentYear);
  };

  useEffect(() => {
    getYear();
  }, []);

  return (
    <section className="py-10">
      <div className="w-11/12 mx-auto">
        <ul className="md:space-x-4 space-y-4 md:space-y-0 md:flex md:mx-auto justify-center mb-14">
          <li className="md:border-r pr-3 border-[#FF8717]">
            <Link href="/">Home</Link>
          </li>
          <li className="md:border-r pr-3 border-[#FF8717]" >
            <Link href="/">Sponsors</Link>
          </li>
          <li className="md:border-r pr-3 border-[#FF8717]">
            <Link href="/">Tickets</Link>
          </li>
          <li className="md:border-r pr-3 border-[#FF8717]">
            <Link href="/">About event</Link>
          </li>
          <li className="md:border-r pr-3 border-[#FF8717]">
            <Link href="/">About MCHolly</Link>
          </li>
          <li className="md:border-r pr-3 border-[#FF8717]">
            <Link href="/">Accomodation</Link>
          </li>
          <li>
            <Link href="/">Gallery</Link>
          </li>
        </ul>
        <div className="flex flex-col-reverse gap-8 md:flex-row lg:flex-row items-center">
          <div className="md:w-5/12 w-full">
            <p>&copy; Copyright {year}</p>
          </div>
          <div className="md:w-7/12 w-full">
            <div className="social-links flex">
              <div className="rounded-full bg-white w-[32px] h-[32px] md:w-[64px] md:h-[64px] flex justify-center items-center mr-3">
                <FaFacebookSquare className="text-[#2252CC] text-xl md:text-2xl" />
              </div>
              <div className="rounded-full bg-white w-[32px] h-[32px] md:w-[64px] md:h-[64px] flex justify-center items-center mr-3">
                <FaLinkedin className="text-xl md:text-2xl text-[#0A66C2]" />
              </div>
              <div className="rounded-full bg-white w-[32px] h-[32px] md:w-[64px] md:h-[64px] flex justify-center items-center">
                <FaTwitter className="text-xl md:text-2xl text-[#55ACEE]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

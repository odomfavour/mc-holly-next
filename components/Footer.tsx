import React, { useEffect, useState } from "react"
import { FaFacebookSquare, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa"
import Link from "next/link"

const Footer = () => {
  const [year, setYear] = useState(0)
  const getYear = () => {
    const d = new Date()
    let currentYear = d.getFullYear()
    setYear(currentYear)
  }

  useEffect(() => {
    getYear()
  }, [])

  return (
    <section className="py-10">
      <div className="w-11/12 mx-auto">
        <ul className="lg:space-x-4 space-y-4 md:space-y-0 lg:flex md:mx-auto justify-center mb-14">
          <li className="lg:border-r pr-3 border-[#FF8717]">
            <Link href="/">Home</Link>
          </li>
          <li className="lg:border-r pr-3 border-[#FF8717]">
            <Link href="/#sponsors">Sponsors</Link>
          </li>
          <li className="lg:border-r pr-3 border-[#FF8717]">
            <Link href="/ticket">Tickets</Link>
          </li>
          <li className="lg:border-r pr-3 border-[#FF8717]">
            <Link href="/#aboutEvent">About event</Link>
          </li>
          <li className="lg:border-r pr-3 border-[#FF8717]">
            <Link href="/#aboutMC">About MCHolly</Link>
          </li>
          <li className="lg:border-r pr-3 border-[#FF8717]">
            <Link href="/#accomodation">Accomodation</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
        <div className="flex flex-col-reverse gap-8 md:flex-row lg:flex-row items-center">
          <div className="md:w-5/12 w-full">
            <p>&copy; Copyright {year}</p>
          </div>
          <div className="md:w-7/12 w-full">
          <div className="social-links flex mt-5">
                <a href="https://web.facebook.com/profile.php?id=100064524676476" target="_blank">
                  <div className="rounded-full bg-white w-[64px] h-[64px] flex justify-center items-center mr-3 cursor-pointer">
                    <FaFacebookSquare className="text-[#2252CC] text-2xl" />
                  </div>
                </a>
                <a href="https://www.youtube.com/channel/UC8iMTeKb74YUsTmuYKeT5FA" target="_blank">
                  <div className="rounded-full bg-white w-[64px] h-[64px] flex justify-center items-center cursor-pointer">
                    <FaYoutube className="text-2xl text-[#ff0000]" />
                  </div>
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

import Link from "next/link"
import React from "react"
import { FaTimes } from "react-icons/fa"
import { headerLinks } from "./appData"
import { useGlobalContext } from "../context/context";

const MobileNav = () => {
    const {isMobileNavOpen, closeMobileNav} = useGlobalContext()
  return (
    <div className={`${isMobileNavOpen ? 'fixed z-50 top-3 w-full' : 'hidden'}`}>
      <div className="w-11/12 mx-auto bg-white min-h-[300px] rounded-md p-5">
        <div className="flex justify-end">
          <FaTimes className="text-red-500 text-xl" role="button" onClick={closeMobileNav}/>
        </div>
        <div className="pt-3">
          <ul className="lg:space-x-4 space-y-4 lg:space-y-0 lg:flex md:mx-auto justify-center">
            {headerLinks.map((item) => {
              const { id, name, url } = item
              return (
                <li className=" block pr-3 border-[#FF8717]" key={id}>
                  <Link href={url}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileNav

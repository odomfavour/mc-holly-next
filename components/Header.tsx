import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handelScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
      }
    window.addEventListener('scroll', handelScroll)

    return () => {
        window.removeEventListener('scroll', handelScroll)
    }
    }, [])
    
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
       <div className="w-11/12 mx-auto">
        <div className="header-inner">
        <div>
            <h3 className='text-xl text-white'>Logo</h3>
        </div>
        <ul className='hidden space-x-4 md:flex'>
            <li className='headerLink'><Link href="/" >Home</Link></li>
            <li className='headerLink'><Link href="/#sponsors" >Sponsors</Link></li>
            <li className='headerLink'><Link href="/ticket">Tickets</Link></li>
            <li className='headerLink'><Link href="/#aboutEvent">About event</Link></li>
            <li className='headerLink'><Link href="/#aboutMC">About MCHolly</Link></li>
            <li className='headerLink'><Link href="/#accomodation">Accomodation</Link></li>
            <li className='headerLink'><Link href="/gallery">Gallery</Link></li>
        </ul>
        </div>
       </div>
    </header>
  )
} 

export default Header
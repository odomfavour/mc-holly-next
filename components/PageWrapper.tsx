import React from "react"
import Footer from "./Footer"
import GalleryModal from "./GalleryModal"
import Header from "./Header"
import MobileNav from "./MobileNav"

type Props = {
  children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => {
  return (
    <section>
      <Header />
      {children}
      <MobileNav/> 
      <Footer />
    </section>
  )
}

export default PageWrapper

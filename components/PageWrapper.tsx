import React from "react"
import Footer from "./Footer"
import Header from "./Header"

type Props = {
  children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  )
}

export default PageWrapper

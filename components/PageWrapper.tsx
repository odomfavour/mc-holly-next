import React from 'react'
import Footer from './Footer'
import Header from './Header'

const PageWrapper = ({children}:any) => {
  return (
    <section>
        <Header/>
            {children}
        <Footer/>
    </section>
  )
}

export default PageWrapper
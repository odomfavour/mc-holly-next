// import type { NextPage } from "next";
import { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import GallerySlider from "../components/GallerySlider"
import PageWrapper from "../components/PageWrapper"


const gallery : NextPage = () =>  {
  const [is2021, setIs2021] = useState(true)
  const [is2022, setIs2022] = useState(false)
  const switchTo22 = () => {
    setIs2021(false)
    setIs2022(true)
  }
  const switchTo21 = () => {
    setIs2021(true)
    setIs2022(false)
  }

  return (
    <div>
      <Head>
        <title>Gallery - MC Holly</title>
        <meta
          name="description"
          content="Holly's Era is a comedy driven entertainment brand based in Akwa Ibom state."
        />
        <meta name="keywords" content="comedy, entertainment, fun" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <PageWrapper>
        <main>
          <div className="w-11/12 mx-auto">
            <h3 className="text-[40px] mb-3 font-bold text-center pt-28">
              GALLERY
            </h3>
            <div className="flex bg-[#F9F9F9] rounded-lg flex-col lg:flex-row">
              <div className="w-1/2">
                <p
                  className={`${
                    is2021
                      ? "text-[#2252CC] text-4xl font-bold text-center py-[20px] "
                      : "text-[#818181] text-4xl font-normal text-center py-[20px]"
                  }`}
                  role="button"
                  onClick={switchTo21}
                >
                  2021
                </p>
              </div>
              <div className="w-1/2">
                <p
                  className={`${
                    is2022
                      ? "text-[#2252CC] text-4xl font-bold text-center py-[20px] "
                      : "text-[#818181] text-4xl font-normal text-center py-[20px]"
                  }`}
                  role="button"
                  onClick={switchTo22}
                >
                  2020
                </p>
              </div>
            </div>
            {is2021 ? (
              <div className="mt-10">
                <GallerySlider />
              </div>
            ) : (
              <div className="mt-10">
                <GallerySlider />
              </div>
            )}
          </div>
        </main>
      </PageWrapper>
    </div>
  )
}

export default gallery

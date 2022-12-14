import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Footer from "../components/Footer"
import Image from "next/image"
import PageWrapper from "../components/PageWrapper"
import { tickets } from "../components/appData"

const ticket: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ticket - MC Holly</title>
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
        <main className="mt-20">
          <div className="flex lg:flex-row flex-col min-h-screen">
            <div className="lg:w-1/3 md:w-full w-full lg:min-h-screen min-h-[200px] lg:bg-ticket1 bg-ticket2 bg-center bg-cover">
              {/* <div className="lg:min-h-screen md:min-h-screen min-h-[200px] md:bg-ticket1 bg-ticket2 bg-center bg-cover"></div> */}
            </div>
            <div className="lg:w-2/3 w-full bg-[#FFF4F4]">
              <div className="w-4/5 mx-auto py-10">
                <h3 className="text-[40px] mb-3 font-bold">TICKET PURCHASE</h3>
                <p className="font-medium mb-4 font-[20px]">
                  Please select an option below
                </p>
                <section className="pb-16">
                  <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-8">
                    {tickets.map((ticket) => {
                      const { name, id, image, link, price } = ticket

                      return (
                        <div
                          className={`${
                            name === "regular"
                              ? "border border-[#CACACA] rounded-md bg-[#D8C9AC7F] p-[20px]"
                              : name === "vip"
                              ? "border border-[#CACACA] rounded-md  p-[20px]  bg-[#A6689733]"
                              : name === "executive"
                              ? "border border-[#CACACA] rounded-md  p-[20px]  bg-[#E5E6E8]"
                              : "border border-[#CACACA] rounded-md  p-[20px] bg-[#CBE6D37F]"
                          }`}
                          key={id}
                        >
                          <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-8 gap-5 items-center">
                            <div className="image-box">
                              <Image
                                src={`${image.src}`}
                                layout="responsive"
                                width={300}
                                height={150}
                              />
                            </div>
                            <p
                              className={`${
                                name === "regular"
                                  ? "font-semibold text-[32px] text-center text-[#563E25]"
                                  : name === "vip"
                                  ? "font-semibold text-[32px] text-center text-[#40263A]"
                                  : name === "executive"
                                  ? "font-semibold text-[32px] text-center text-[#57585A]"
                                  : "font-semibold text-[32px] text-center text-[#326742]"
                              }`}
                            >
                              ??? {price}
                            </p>
                            <div className="info flex items-center justify-center mb-3 lg:mb-0">
                              <div>
                                <a
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-[24px] py-[12px] border border-[#287094] text-[#287094] rounded-md"
                                >
                                  PURCHASE NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </section>
              </div>

              {/* <section className=" bg-[#F9F9F9] py-8">
              <div className="w-4/5 mx-auto">
                <div className="flex items-center gap-4">
                  <div className="form-group mb-4 w-1/6">
                    <label htmlFor="quantity" className="block mb-2 text-[#1F1F1F] text-base font-normal">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="p-5 border rounded-md text-[24px] w-full"
                    />
                  </div>
                  <div className=" mb-4">
                    <h3 className="mb-2 text-[#1F1F1F] text-base font-normal">Total Amount</h3>
                    <div className="price-box p-5 border rounded-md text-[24px] bg-white">
                      <h4>
                        ??? <span>10000</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                    <h5>Please enter your details</h5>
                    <div className="form-group mb-4 w-1/2">
                    <label htmlFor="fullName" className="block mb-2 text-[#1F1F1F] text-base font-normal">
                    Full Name
                    </label>
                    <input
                      type="text"
                      className="p-3 border rounded-md text-base w-full"
                    />
                  </div>
                    <div className="form-group mb-4 w-8/12">
                    <label htmlFor="quantity" className="block mb-2 text-[#1F1F1F] text-base font-normal">
                    Email
                    </label>
                    <input
                      type="email"
                      className="p-3 border rounded-md text-base w-full"
                    />
                  </div>
                </div>
              </div>
            </section> */}
            </div>
          </div>
        </main>
      </PageWrapper>
    </div>
  )
}

export default ticket

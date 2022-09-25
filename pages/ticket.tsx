import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
// import PageWrapper from "../components/PageWrapper";

const ticket: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ticket - MC Holly</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <div className="flex md:flex-row flex-col min-h-screen">
          <div className="md:w-1/3 w-full">
            <div className="md:min-h-screen min-h-[200px] md:bg-ticket1 bg-ticket2 bg-center bg-contain"></div>
          </div>
          <div className="md:w-2/3 w-full">
            <div className="w-4/5 mx-auto py-10">
             <a href="/"> <div className="rounded-full p-3 bg-[#ccc] h-[60px] w-[60px] flex justify-center items-center cursor-pointer">
                <FaArrowLeft />
              </div>
              </a>
              <h3 className="text-[40px] mb-3 font-bold">TICKET PURCHASE</h3>
              <p className="font-medium mb-4 font-[20px]">
                Please select an option below
              </p>
              <section className="w-10/12 pb-16">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
                  <Image
                    src="/regular-ticket.jpeg"
                    layout="responsive"
                    width={300}
                    height={150}
                  />
                  <Image
                    src="/premium-ticket.jpeg"
                    layout="responsive"
                    width={300}
                    height={150}
                  />
                  <Image
                    src="/vip-ticket.jpeg"
                    layout="responsive"
                    width={300}
                    height={150}
                  />
                  <Image
                    src="/executive-ticket.jpeg"
                    layout="responsive"
                    width={300}
                    height={150}
                  />
                </div>
              </section>
              <div className="pt-4">
                <a
                  href=""
                  className="px-[64px] py-[24px] border bg-[#287094] text-white mt-10"
                >
                  PURCHASE NOW
                </a>
              </div>
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
                        ₦ <span>10000</span>
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
      <Footer />
    </div>
  );
};

export default ticket;

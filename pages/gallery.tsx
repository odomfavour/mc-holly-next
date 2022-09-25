// import type { NextPage } from "next";
import Head from "next/head";
import PageWrapper from "../components/PageWrapper";

const gallery = () => {
  return (
    <div>
      <Head>
        <title>Gallery - MC Holly</title>
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
            <h3 className="text-[40px] mb-3 font-bold text-center pt-20">
              GALLERY
            </h3>
            <div className="flex bg-[#F9F9F9] rounded-lg">
              <div className="w-1/2">
                <p className="text-[#2252CC] text-center text-2xl  py-[20px]">
                  2021
                </p>
              </div>
              <div className="w-1/2">
                <p className="text-[#818181] text-2xl text-center  py-[20px]">
                  2021
                </p>
              </div>
            </div>
          </div>
        </main>
      </PageWrapper>
    </div>
  );
};

export default gallery;

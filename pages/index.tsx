import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import AboutEvent from "../components/AboutEvent";
import AboutMc from "../components/AboutMc";
import Accomodation from "../components/Accomodation";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import PageWrapper from "../components/PageWrapper";
import Sponsor from "../components/Sponsor";
import Ticket from "../components/Ticket";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Home - MC Holly</title>
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
        <Banner />
        <Sponsor/>
        <Ticket/>
        <AboutEvent/>
        <AboutMc/>
        <Accomodation/>
        <Gallery/>
      </main>
      </PageWrapper>
    </div>
  );
};

export default Home;

import type { NextPage } from "next"
import Head from "next/head"
import AboutEvent from "../components/AboutEvent"
import AboutMc from "../components/AboutMc"
import Accommodation from "../components/Accommodation"
import Banner from "../components/Banner"
// import Gallery from "../components/Gallery"
import PageWrapper from "../components/PageWrapper"
import PerformingArtiste from "../components/PerformingArtiste"
import Sponsor from "../components/Sponsor"
import Ticket from "../components/Ticket"
import YoutubeArena from "../components/YoutubeArena"

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Home - MC Holly</title>
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
        <main className="scroll-smooth">
          <Banner />
          <Sponsor />
          <Ticket />
          <PerformingArtiste/>
          <AboutEvent />
          <AboutMc />
          <Accommodation />
          <YoutubeArena/>
          {/* <Gallery /> */}
        </main>
      </PageWrapper>
    </div>
  )
}

export default Home

import React, { useCallback, useRef, useState } from "react"
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa"
import PageWrapper from "../components/PageWrapper"
import Image from "next/image"
import { artistes } from "../components/appData"
import Head from "next/head"
import { NextPage } from "next"

const artiste: NextPage = () => {
  const [currentArtiste, setCurrentArtiste] = useState({
    id: 0,
    image: "",
    name: "",
    role: "",
  })
  const [isClicked, setIsClicked] = useState(false)
  const artisteRef = useRef<HTMLDivElement>(null)
  const openCharacter = (character: any) => {
    setCurrentArtiste(character)
    console.log(currentArtiste)
    setIsClicked(true)
    
    if (artisteRef.current) {
      artisteRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <>
      <Head>
        <title>Artistes - MC Holly</title>
        <meta
          name="description"
          content="Holly's Era is a comedy driven entertainment brand based in Akwa Ibom state."
        />
        <meta name="keywords" content="comedy, entertainment, fun" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <PageWrapper>
        <section className="mt-[80px] scroll-smooth transition-all ease-in-out delay-150">
          <div className="title-section min-h-screen bg-artiste-hero flex justify-center items-center bg-cover bg-center">
            <h3 className="lg:text-[48px] text-2xl text-white font-bold">
              Performing Arstistes
            </h3>
          </div>
          <section>
            <div className="w-11/12 mx-auto">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 my-24">
                {artistes.map((artiste) => {
                  // const { id, name, role } = artiste
                  return (
                    <div
                      className={`${
                        artiste.id == currentArtiste.id
                          ? "artiste-box border-solid border-[#ABABAB] bg-[#EFEDED] border rounded-xl px-12 py-[55px] hover:bg-[#EFEDED] cursor-pointer"
                          : "artiste-box border-solid border-[#ABABAB] bg-white  border rounded-xl px-12 py-[55px] hover:bg-[#EFEDED] cursor-pointer"
                      }`}
                      key={artiste.id}
                      role="button"
                      onClick={() => openCharacter(artiste)}
                    >
                      <div className="image-box">
                        <img
                          src={artiste.image.src || "/artistes/artiste.png"}
                          alt=""
                          className="h-[180px] w-[180px] rounded-full object-cover mx-auto"
                        />
                      </div>
                      <div className="artiste-info text-center">
                        <h3 className="text-[32px] font-medium text-[#1F1F1F] my-3">
                          {artiste.name}
                        </h3>
                        <p className="font-normal text-2xl text-[#5D5FEF]">
                          {artiste.role}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
              {isClicked && (
                <section ref={artisteRef}>
                  {Object.keys(currentArtiste).length !== 0 ? (
                    <div className="bg-[#F9F9F9] rounded-xl p-[40px]">
                      <div className="md:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="flex items-center">
                          <div>
                            <h4 className="text-[40px] font-medium text-[#1F1F1F]">
                              {currentArtiste?.name}
                            </h4>
                            <p className="font-normal text-[20px] text-[#5D5FEF] mb-3">
                              {currentArtiste.role}
                            </p>
                            <p className="mb-4">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Congue aliquam nisl, eget risus. Id sapien
                              amet condimentum vitae, turpis id tellus eget
                              nulla. Semper blandit justo, feugiat sagittis
                              turpis morbi. Consectetur sit vitae, lobortis odio
                              eu. Nec, vulputate sit amet rhoncus ac egestas
                              vel, dolor. Cras sit volutpat pharetra varius nibh
                              nunc pellentesque lorem urna. Volutpat donec enim
                              sit nisl augue tristique blandit.
                            </p>

                            <p>
                              Duis tellus, tellus orci, semper. Rhoncus augue
                              pellentesque neque viverra sem sit.{" "}
                            </p>
                            <div className="social-links flex mt-5">
                              <a
                                href="https://web.facebook.com/profile.php?id=100064524676476"
                                target="_blank"
                              >
                                <div className="rounded-full bg-white w-[64px] h-[64px] flex justify-center items-center mr-3 cursor-pointer">
                                  <FaFacebookSquare className="text-[#2252CC] text-2xl" />
                                </div>
                              </a>
                              <a href="#" target="_blank">
                                <div className="rounded-full bg-white w-[64px] h-[64px] flex justify-center items-center mr-3 cursor-pointer">
                                  <FaLinkedin className="text-2xl text-[#0A66C2]" />
                                </div>
                              </a>
                              <a href="#" target="_blank">
                                <div className="rounded-full bg-white w-[64px] h-[64px] flex justify-center items-center cursor-pointer">
                                  <FaYoutube className="text-2xl text-[#ff0000]" />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="mx-auto">
                          <Image
                            src={currentArtiste.image}
                            width={539}
                            height={461}
                            objectFit="contain"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </section>
              )}
              {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 my-24">
                {artistes.slice(0, 8).map((artiste) => {
                  // const { id, name, role } = artiste
                  return (
                    <div
                      className="artiste-box border-solid border-[#ABABAB] bg-white  border rounded-xl px-12 py-[55px] hover:bg-[#EFEDED] cursor-pointer"
                      role="button"
                      key={artiste.id}
                      onClick={() => openCharacter(artiste)}
                    >
                      <div className="image-box">
                        <img
                          src={artiste.image.src || '/artistes/artiste.png'}
                          alt=""
                          className="h-[180px] w-[180px] rounded-full object-cover mx-auto"
                        />
                      </div>
                      <div className="artiste-info text-center">
                        <h3 className="text-[32px] font-medium text-[#1F1F1F] my-3">
                          {artiste.name}
                        </h3>
                        <p className="font-normal text-2xl text-[#5D5FEF]">
                          {artiste.role}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div> */}
            </div>
          </section>
        </section>
      </PageWrapper>
    </>
  )
}

export default artiste

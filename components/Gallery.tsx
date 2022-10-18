import Link from "next/link"
import React, { useCallback, useState } from "react"
import { gallery, gallery1 } from "./appData"
import Image from "next/image"
import { useGlobalContext } from "../context/context"
import GalleryModal from "./GalleryModal"

const Gallery = () => {
  const {openGalleryModal} = useGlobalContext()
  const [currentImage, setCurrentImage] = useState(null)
  const openCharacter = useCallback((character: React.SetStateAction<null>) => {
    setCurrentImage(character)
    openGalleryModal();
}, [])

  return (
    <section className="bg-[#EBF3ED] min-h-screen py-8">
      <div className="w-11/12 mx-auto">
        <div className="pt-20">
          <h3 className="text-center mb-10 font-semibold text-5xl">Gallery</h3>
        </div>
        <div className="mt-10">
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="lg:w-[47%] w-full ">
              <div className="bg-[#F7F7F7] rounded-xl">
                <div className="p-4">
                  <div className="mb-3 columns-3">
                    {gallery.map((item) => {
                      const { image, id, title } = item
                      return (
                        <div
                          className="relative min-h-[140px] mb-3 break-inside-avoid"
                          key={id}
                          role="button"
                          onClick={() => openCharacter(item)}
                        >
                          <Image
                            src={`${image.src}`}
                            objectFit="cover"
                            layout="fill"
                            priority
                            className="rounded-tr-md rounded-tl-md object-top hover:scale-110 transition-all duration-150 ease-out delay-50"
                          />
                          {/* <img
                            src={`${image.src}`}
                            alt=""
                            className="w-full h-[200px] object-cover object-center"
                          /> */}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="bg-white p-9 rounded-bl-xl rounded-br-xl">
                  <h3 className="text-center">MC Holly event 2021</h3>
                </div>
              </div>
            </div>
            <div className="lg:w-[47%] w-full">
              <div className="bg-[#F7F7F7] rounded-xl">
                <div className="p-4">
                  <div className="mb-3 columns-3">
                    {gallery1.map((item) => {
                      const { image, id, title } = item
                      return (
                        <div
                          className="relative min-h-[140px] mb-3 break-inside-avoid"
                          key={id}
                          role="button"
                          onClick={() => openCharacter(item)}
                        >
                          <Image
                            src={`${image.src}`}
                            objectFit="cover"
                            layout="fill"
                            priority
                            className="rounded-tr-md rounded-tl-md object-center hover:scale-110 transition-all duration-150 ease-out delay-50"
                          />
                          {/* <img
                            src={`${image.src}`}
                            alt=""
                            className="w-full h-[200px] object-cover object-center"
                          /> */}
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="bg-white p-9 rounded-bl-xl rounded-br-xl">
                  <h3 className="text-center">MC Holly event 2022</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/gallery">
              <p className=" border md:px-[64px] md:py-[20px] px-5 py-3 rounded-md border-[#454743] cursor-pointer text-[#1F1F1F]">
                View Gallery
              </p>
            </Link>
          </div>
        </div>
        <GalleryModal character={currentImage}/>
      </div>
    </section>
  )
}

export default Gallery

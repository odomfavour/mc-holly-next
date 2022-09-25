import Link from "next/link";
import React from "react";
import { gallery } from "./appData";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="bg-[#EBF3ED] min-h-screen py-8">
      <div className="w-11/12 mx-auto">
        <div className="pt-20">
          <h3 className="text-center mb-10 font-semibold text-5xl">Gallery</h3>
        </div>
        <div className="mt-10">
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="lg:w-5/12 w-full ">
              <div className="bg-[#F7F7F7] rounded-xl">
                <div className="p-4">
                  <div className="masonry mb-3">
                    {gallery.map((item) => {
                      const { image, id, title } = item;
                      return (
                        <div className="h-[200px] mb-3" key={id}>
                          {/* <Image
                    src={`${image.src}`}
                    width={319}
                    height={165}
                    objectFit="cover"
                    priority
                    className="rounded-tr-md rounded-tl-md"
                  /> */}
                          <img
                            src={`${image.src}`}
                            alt=""
                            className="w-full h-[200px] object-cover object-center"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-white p-9 rounded-bl-xl rounded-br-xl">
                  <h3 className="text-center">MC Holly event 2021</h3>
                </div>
              </div>
            </div>
            <div className="lg:w-5/12 w-full">
              <div className="bg-[#F7F7F7] rounded-xl">
                <div className="p-4">
                <div className="masonry mb-3">
                    {gallery.map((item) => {
                      const { image, id, title } = item;
                      return (
                        <div className="h-[200px] mb-3" key={id}>
                          {/* <Image
                    src={`${image.src}`}
                    width={319}
                    height={165}
                    objectFit="cover"
                    priority
                    className="rounded-tr-md rounded-tl-md"
                  /> */}
                          <img
                            src={`${image.src}`}
                            alt=""
                            className="w-full h-[200px] object-cover object-center"
                          />
                        </div>
                      );
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
            <p className=" border md:px-[64px] md:py-[20px] px-5 py-3 rounded-md border-[#454743] cursor-pointer text-[#1F1F1F]">
              <Link href="/gallery">View Gallery</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

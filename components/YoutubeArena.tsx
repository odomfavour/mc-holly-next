import Link from "next/link"
import React from "react"
import { featuredVideos } from "./appData"
const YoutubeArena = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto">
        <div className="py-[80px]">
          <div>
            <h4 className="text-[#1F1F1F] text-[28px] mb-4">
              A <span className="text-[#2252cc] font-semibold"> Glimpse </span> of our past events
            </h4>
            <p className="text-[18px] mb-5">
              Watch videos of Holly’s Era in the previous years
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {featuredVideos.map((featured) => {
              const { id, name, videoId } = featured
              return (
                <div
                  className="video-card border border-solid p-[20px]"
                  key={id}
                >
                  <div className="video-box aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video-info">
                    <h5 className="text-[18px] font-semibold pt-3">{name}</h5>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-12 flex justify-center">
            <a href="https://www.youtube.com/channel/UC8iMTeKb74YUsTmuYKeT5FA" target="_blank">
              <p className=" border md:px-[64px] md:py-[20px] px-5 py-3 rounded-md border-[#454743] hover:bg-[#2252CC] hover:border-[#2252cc] hover:text-white transition ease-in-out delay-150 cursor-pointer text-[#1F1F1F]">
                View More
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YoutubeArena

import React from "react"

const YoutubeArena = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto">
       <div className="py-[80px]">
       <div>
            <h4 className="text-[#1F1F1F] text-[28px] mb-4"><span className="text-[#2252cc] font-semibold">RELIVE</span> the experience on our Youtube channel</h4>
            <p className="text-[18px] mb-5">Watch videos of Holly’s Era in the previous years</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="video-card border border-solid p-[20px]">
            <div className="video-box aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/LTdACJTPmIw"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h5 className="text-[18px] font-semibold pt-3">Holly’s Era 2021</h5>
            </div>
          </div>
          <div className="video-card border border-solid p-[20px]">
            <div className="video-box aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/6MZSipnPlTM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h5 className="text-[18px] font-semibold pt-3">Holly’s Era 2021</h5>
            </div>
          </div>
          <div className="video-card border border-solid p-[20px]">
            <div className="video-box aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/LTdACJTPmIw"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h5 className="text-[18px] font-semibold pt-3">Holly’s Era 2021</h5>
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
  )
}

export default YoutubeArena

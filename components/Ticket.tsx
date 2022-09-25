import React from "react";
import Image from "next/image";
const Ticket = () => {
  return (
    <section className="bg-[#f29f1f33] min-h-screen pb-20">
      <div className="w-11/12 mx-auto">
        <div className="pt-20">
          <h3 className="text-center mb-10 font-semibold md:text-5xl text-2xl">Ticket</h3>
          <div className="flex gap-8 flex-col lg:flex-row">
            <div className="lg:w-1/3 w-full flex items-center justify-center">
              <Image
                src="/ticket.png"
                objectFit="cover"
                width="583px"
                height="443px"
                className="w-full"
              />
            </div>
            <div className="lg:w-2/3 w-full">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
                {/* <div className="bg-white text-center rounded text-[#1F1F1F]">
                  <p className="border-b border-[#BBB5B0] py-3 text-base font-medium">
                    Regular
                  </p>
                  <h3 className="py-8 font-semibold text-2xl">₦ 5,000</h3>
                </div> */}
                <Image src="/regular-ticket.jpeg" layout="responsive" width={300} height={150} />
                <Image src="/premium-ticket.jpeg" layout="responsive" width={300} height={150} />
                <Image src="/vip-ticket.jpeg" layout="responsive" width={300} height={150} />
                <Image src="/executive-ticket.jpeg" layout="responsive" width={300} height={150} />
                

                <div className="bg-white text-center rounded text-[#9A073C]">
                  {/* <p className="border-b border-[#BBB5B0] py-3 text-base font-medium">
                    VIP
                  </p>
                  <h3 className="py-8 font-semibold text-2xl">₦ 5,000</h3> */}
                </div>
                <div className="bg-white text-center rounded text-[#DF6800]">
                  {/* <p className="border-b border-[#BBB5B0] py-3 text-base font-medium">
                    Table for 10
                    </p>
                <h3 className="py-8 font-semibold text-2xl">₦ 500,000</h3> */}
                </div>
                <div className="bg-white text-center rounded text-[#2252CC]">
                  {/* <p className="border-b border-[#BBB5B0] py-3 text-base font-medium">
                    Table for 4
                  </p>
                  <h3 className="py-8 font-semibold text-2xl">₦ 1,000,000</h3> */}
                </div>
              </div>
              {/* <div className="rounded bg-white p-5 mt-8">
                <div className="flex items-center">
                  <h3 className="mr-2 text-[32px] font-medium">₦ 5,000</h3>
                  <p className="text-[18px]">Regular </p>
                </div>
                <p className="w-2/3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Congue aliquam nisl, eget risus.{" "}
                </p>
                <div className="h-[120px] bg-[#D9D9D9] mt-4"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticket;

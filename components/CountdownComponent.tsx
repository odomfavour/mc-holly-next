import Countdown from "react-countdown"

export default function CountdownComponent() {
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <div className="flex justify-between items-center">
        <div className="md:w-[100px] md:h-[100px] w-[59px] h-[69px] bg-[#5e59594c] rounded-md flex justify-center items-center text-center">
          <div>
            <h3 className="md:text-4xl text-base">{days}</h3>
            <p className="md:text-[18px] text-[14px]">Days</p>
          </div>
        </div>
        <div className="md:w-[100px] md:h-[100px] w-[59px] h-[69px] bg-[#5e59594c] rounded-md flex justify-center items-center text-center">
          <div>
            <h3 className="md:text-4xl text-base">{hours}</h3>
            <p className="md:text-[18px] text-[14px]">Hours</p>
          </div>
        </div>
        <div className="md:w-[100px] md:h-[100px] w-[59px] h-[69px] bg-[#5e59594c] rounded-md flex justify-center items-center text-center">
          <div>
            <h3 className="md:text-4xl text-base">{minutes}</h3>
            <p className="md:text-[18px] text-[14px]">Minutes</p>
          </div>
        </div>
        <div className="md:w-[100px] md:h-[100px] w-[59px] h-[69px] bg-[#5e59594c] rounded-md flex justify-center items-center text-center">
          <div>
            <h3 className="md:text-4xl text-base">{seconds}</h3>
            <p className="md:text-[18px] text-[14px]">Seconds</p>
          </div>
        </div>
      </div>
    )
  }

  return <Countdown date="11-18-2022" renderer={renderer} />
}

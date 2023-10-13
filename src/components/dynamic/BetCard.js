import Image from "next/image";
import starIcon from "../../assets/icons/starIcon.svg";

const BetCard = (props) => {
  const { bet } = props;
  const { price, time, betType } = bet;

  return (
    <>
      <div className="relative bg-transparent p-5 my-[12px] flex items-center justify-center border-2 border-dashed border-gray-700 flex-col rounded-[12px]">
        <div
          className={`flex items-center justify-start w-full gap-2  mb-4 ${
            betType === "lower" ? "text-[#f1305f]" : "text-[#31cd86]"
          }`}
        >
          <Image src={starIcon} alt="star" /> ${price}
        </div>
        <div className="flex items-center justify-between w-full gap-2 text-green-500">
          <p className="text-white">${price}</p>
          <p className="text-green-500">${price}</p>
          <p>$0</p>
        </div>
        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex flex-col gap-2 items-start justify-start">
            <p className="text-[#8f9bab]">Entry Price</p>
            <p className="text-white">--</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-[#8f9bab]">Difference</p>
            <p className="text-white">--</p>
          </div>
          <div className="flex flex-col gap-2 items-end justify-end">
            <p className="text-[#8f9bab]">Closing Price</p>
            <p className="text-white">--</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full gap-2">
          <div className="flex flex-col gap-2 items-start justify-start">
            <p className="text-[#8f9bab]">Entry Time</p>
            <p className="text-white">{time}</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-[#8f9bab]">Time Left</p>
            <p className="text-white">00</p>
          </div>
          <div className="flex flex-col gap-2 items-end justify-end">
            <p className="text-[#8f9bab]">Closing Time</p>
            <p className="text-white">{time}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetCard;

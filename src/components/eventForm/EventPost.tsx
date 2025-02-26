import React from "react";
import love from "../../assets/images/love.png";
import share from "../../assets/images/share.png";

interface EventPostProps {
  title: string;
  desc: string;
  image: string;
  className?: string;
}

const EventPost: React.FC<EventPostProps> = ({
  title,
  desc,
  image,
  className,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover rounded-t-lg"
        />

        <div className="absolute top-1 left-0 right-0 w-full px-2 flex justify-between items-center">
          <div className="bg-white py-1 px-2 text-[#8E1C38] rounded-md">
            FREE
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center">
              <img src={love} alt="love" className="w-3" />
            </div>
            <div className="bg-white w-5 h-5 rounded-full flex justify-center items-center">
              <img src={share} alt="share" className="w-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 flex gap-8 shadow-md rounded-b-lg">
        <div>
          <p className="text-gray-400">Jan</p>
          <p className="text-[#8E1C38] text-2xl font-semibold">06</p>
        </div>
        <div className="space-y-3">
          <p className="text-[#8E1C38] font-semibold">{title}</p>
          <p className="text-gray-700">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default EventPost;

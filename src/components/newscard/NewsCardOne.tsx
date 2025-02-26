import React from "react";
import Button from "../ui/Button";
import { IoIosArrowForward } from "react-icons/io";

const NewsCardOne: React.FC = () => {
  return (
    <div className="space-y-5 pl-16 lg:pr-8 xl:pr-20 py-10 bg-white w-[35rem] rounded-lg">
      <div>
        <p className="font-semibold text-[#8E1C38]">Catalyzing Change, Driving Innovation:</p>
        <p className="font-semibold text-[#8E1C38]">Innovate Africa's Vision for Africa's Future</p>
      </div>
      <p className="text-gray-500 text-[16px]">
        Our mission is to empower startups with the tools and resources needed
        to thrive in the ever-evolving tech landscape.
      </p>
      <div>
        <Button name="Apply" icon={<IoIosArrowForward className="mt-1" />}/>
      </div>
    </div>
  );
};

export default NewsCardOne;

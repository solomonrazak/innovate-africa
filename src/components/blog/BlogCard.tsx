import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface BlogCardProps {
  image: string;
  title: string;
  name: string;
  desc: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  name,
  desc,
  className,
}) => {
  return (
    <div className="w-full space-y-3">
      <img
        src={image}
        alt={title}
        className={`rounded-lg w-full h-[210px] object-cover ${className}`}
      />
      <p className="text-[#8E1C38] text-[17px] font-semibold lg:min-h-13">
        {title}
      </p>
      <p className="text-gray-600 text-[14px] font-semibold">{name}</p>
      <p className="text-gray-500 text-[11px] lg:min-h-22">{desc}</p>
      <button className="flex gap-1 px-2 py-1 items-center border border-[#8E1C38] rounded-[5px]">
        See More
        <MdKeyboardArrowRight className="text-[#8E1C38] text-[18px] mt-1" />
      </button>
    </div>
  );
};

export default BlogCard;

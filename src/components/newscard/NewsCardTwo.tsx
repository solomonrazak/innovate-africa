import React from "react";

interface NewsProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const NewsCardTwo: React.FC<NewsProps> = ({
  image,
  title,
  description,
  className,
}) => {
  return (
    <div className={`w-[380px] space-y-3 ${className}`}>
      <img
        src={image}
        alt={title}
        className="rounded-lg w-full h-[300px] object-cover"
      />
      <p className="text-[#8E1C38] text-[21px] font-semibold">{title}</p>
      <p className="text-gray-500 text-[14px]">{description}</p>
    </div>
  );
};

export default NewsCardTwo;

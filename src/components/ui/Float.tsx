import React from "react";

interface FlotProps {
  name: string;
  icon: React.ReactNode;
  className?: string;
}

const Float: React.FC<FlotProps> = ({ name, icon, className }) => {
  return (
    <div className="bg-white flex gap-2 px-6 p-2 rounded-md">
      <div className="bg-[#8E1C38] p-1">{icon}</div>
      <p className="text-[#8E1C38]">{name}</p>
    </div>
  );
};

export default Float;

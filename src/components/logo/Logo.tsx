import React from "react";
import logo from "../../assets/images/logo.png";

const Logo: React.FC = () => {
  return (
    <div className="flex gap-1">
      <img src={logo} alt="logo" className="h-14" />
      <p className="flex flex-col leading-4.5 text-[#800020]">
        <span>Innovate</span>
        <span>Africa</span>
        <span>Fund</span>
      </p>
    </div>
  );
};

export default Logo;

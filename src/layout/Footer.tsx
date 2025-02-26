import React from 'react';
import Logo from '../components/logo/Logo';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { NavLink } from 'react-router-dom';
import Button from '../components/ui/Button';
import { FaPaperPlane } from "react-icons/fa";

const Footer: React.FC = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="pt-24 pb-36 px-10 lg:px-14 flex flex-col lg:flex-row justify-between w-full">
    
      <div className="flex lg:block justify-between items-center space-y-5">
        <Logo />
        <div className="hidden lg:flex gap-5 pl-5">
          <FaFacebookF className="text-[#8E1C38] text-[14px]" />
          <FaTwitter className="text-[#8E1C38] text-[14px]" />
          <TfiYoutube className="text-[#8E1C38] text-[14px]" />
        </div>
      </div>

     <div>
      <div className="flex items-center mt-10 lg:mt-0">
        <ul className="space-y-3">
          {links.map(({ name, path }) => (
            <li key={name} className=''>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-[#8E1C38] text-start ${isActive ? "font-semibold" : "hover:text-gray-600"}`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex lg:hidden mt-10 gap-5">
          <FaFacebookF className="text-[#8E1C38] text-[14px]" />
          <FaTwitter className="text-[#8E1C38] text-[14px]" />
          <TfiYoutube className="text-[#8E1C38] text-[14px]" />
        </div>
      </div>

    
      <div className="mt-10 lg:mt-0">
        <form className="space-y-3">
          <p className="font-semibold">Newsletter</p>
          <div className="flex flex-col gap-3">
          <input
            type="text"
            className="border border-[#8E1C38] h-10 pl-3 text-[13px] w-full sm:w-64"
            placeholder="Your full name"
          />
          <input
            type="email"
            className="border border-[#8E1C38] h-10 pl-3 text-[13px] w-full sm:w-64"
            placeholder="Your email"
          />
          <Button name="Subscribe" icon={<FaPaperPlane />} className="flex justify-center"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;

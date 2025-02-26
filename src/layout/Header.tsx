import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/logo/Logo';
import Button from '../components/ui/Button';
import { IoIosArrowForward } from "react-icons/io";

const Header:React.FC = () => {
  return (
    <div className="flex justify-between items-center px-20 w-full py-2 bg-white shadow-md">
     
      <div>
        <Logo />
      </div>

    
      <ul className="flex gap-6 text-[#8E1C38]">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Events", path: "/events" },
          { name: "Blog", path: "/blog" },
          { name: "Contact us", path: "/contact-us" }
        ].map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `hover:text-[#600D22] transition duration-200 ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Button name="Apply" icon={<IoIosArrowForward className="mt-1" />} />
    </div>
  );
};

export default Header;

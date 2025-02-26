import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Logo from "../components/logo/Logo";
import Button from "../components/ui/Button";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        <Logo />

        <ul className="hidden md:flex gap-6 text-[#8E1C38]">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Events", path: "/events" },
            { name: "Blog", path: "/blog" },
            { name: "Contact us", path: "/contact-us" },
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

        <div className="hidden md:block">
          <Button name="Apply" icon={<IoIosArrowForward className="mt-1" />} />
        </div>

        <button
          className="md:hidden text-3xl text-[#8E1C38]"
          onClick={() => setIsOpen(true)}
        >
          <IoMdMenu />
        </button>
      </div>
      {/* for mobile */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-[60%] h-full bg-white flex flex-col items-center justify-center z-50 transition-transform duration-300 transform translate-x-0">
          <button
            className="absolute top-5 right-5 text-4xl text-[#8E1C38]"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </button>

          <ul className="flex flex-col gap-6 text-[#8E1C38] text-2xl">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Events", path: "/events" },
              { name: "Blog", path: "/blog" },
              { name: "Contact us", path: "/contact-us" },
            ].map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="hover:text-[#600D22] transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button
              name="Apply"
              icon={<IoIosArrowForward className="mt-1" />}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import CurvedLine from "../../components/ui/CurvedLine";
import { MdKeyboardArrowRight } from "react-icons/md";
import unn from "../../assets/images/unn.png";

const Blog: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-[#FFF8FA] relative py-5 overflow-hidden">
        <h1 className="text-3xl font-bold text-center text-[#8E1C38]">Blog</h1>

        <div className="p-5 bg-white shadow-md mt-4 w-[300px] mx-auto rounded-md z-10 relative">
          <p className="text-center text-gray-500">Here's what is happening</p>
        </div>

        <div className="relative mt-6 w-full h-[200px]">
          <img
            src={blog1}
            alt="Blog 1"
            className="absolute -left-20 top-0 h-[300px] w-[400px] z-30 object-cover m-0 p-0"
          />
          <img
            src={blog2}
            alt="Blog 2"
            className="absolute -right-20 top-0 h-[380px] z-30 object-cover m-0 p-0 -rotate-16"
          />
        </div>

        <div className="absolute bottom-1 w-full z-0">
          <CurvedLine />
        </div>
        <div className="absolute -top-[10%] z-0">
          <img src={unn} alt="union" className="w-[150px]" />
        </div>
      </div>

      <div>
        <div className="flex justify-between px-18 items-center mt-13">
          <p className="text-gray-500">Explore specific categories</p>
          <div className="flex gap-8 items-center">
            <ul className="flex gap-7 items-center text-[#8E1C38]">
              {[
                { name: "African News", path: "/blog/african-news" },
                { name: "Employment", path: "/blog/employment" },
                { name: "Health", path: "/blog/health" },
                { name: "Security", path: "/blog/security" },
                { name: "Talent", path: "/blog/talent" },
                { name: "Opportunities", path: "/blog/opportunities" },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative pb-1 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#8E1C38]"
                          : "text-gray-400"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="bg-[#eadade] rounded-full h-4 w-4 flex items-center justify-center">
              <MdKeyboardArrowRight className="text-[#8E1C38]" />
            </div>
          </div>
        </div>

        <main className="my-12 px-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Blog;

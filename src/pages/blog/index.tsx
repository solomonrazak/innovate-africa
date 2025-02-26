import React, { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import unn from "../../assets/images/unn.png";
import CurvedLine from "../../components/ui/CurvedLine";

const Blog: React.FC = () => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

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
            className="absolute -left-20 top-0 h-[300px] w-[400px] z-30 object-cover"
          />
          <img
            src={blog2}
            alt="Blog 2"
            className="absolute -right-20 top-0 h-[380px] z-30 object-cover -rotate-16"
          />
        </div>

        <div className="absolute bottom-1 w-full z-0">
          <CurvedLine />
        </div>
        <div className="absolute -top-[10%] z-0">
          <img src={unn} alt="union" className="w-[150px]" />
        </div>
      </div>

      <div className="lg:flex justify-between px-6 lg:px-18 mt-10">
        <p className="text-gray-500">Explore specific categories</p>

        <div className="flex items-center gap-4">
          <div className="relative w-full overflow-hidden">
            <ul
              ref={scrollRef}
              className="flex gap-6 items-center text-[#8E1C38] overflow-x-auto whitespace-nowrap scrollbar-hide"
            >
              {[
                { name: "African News", path: "/blog/african-news" },
                { name: "Employment", path: "/blog/employment" },
                { name: "Health", path: "/blog/health" },
                { name: "Security", path: "/blog/security" },
                { name: "Talent", path: "/blog/talent" },
                { name: "Opportunities", path: "/blog/opportunities" },
              ].map((link) => (
                <li key={link.name} className="shrink-0">
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
          </div>

          <button
            className="bg-[#eadade] rounded-full h-7 w-7 flex items-center justify-center"
            onClick={scrollRight}
          >
            <MdKeyboardArrowRight className="text-[#8E1C38] text-lg" />
          </button>
        </div>
      </div>

      <main className="my-12">
        <Outlet />
      </main>
    </div>
  );
};

export default Blog;

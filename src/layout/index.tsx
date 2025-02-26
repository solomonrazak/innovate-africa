import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import ScrollToTop from "../components/ScrollToTop";

const Layout: React.FC = () => {
  return (
    <>
     <ScrollToTop />
      <div className="w-screen h-screen container mx-auto">
        <nav className="w-full z-50">
          <Header />
        </nav>
        <main className="">
         
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;

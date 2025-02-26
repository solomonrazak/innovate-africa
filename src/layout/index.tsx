import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Layout:React.FC = () => {
  return (
    <div className="w-screen h-screen">
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
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
    <NavBar />
  

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* Footer */}
  <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Dashboard/Sidebar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar/>
        <div className="flex-grow p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

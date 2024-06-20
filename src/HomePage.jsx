import React from "react";
import Header from "./components/Home/Header";
import Dashboard from "./components/Home/HomeDashboard";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Dashboard />
    </div>
  );
};

export default HomePage;

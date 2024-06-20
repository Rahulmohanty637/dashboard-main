import React from 'react';
import logo from '../../assets/logo.png'; // Assuming the logo is in the 'src/assets' folder

const Header = () => {
  return (
    <header className="bg-white flex items-center justify-between shadow">
      <div className="flex items-center pl-4">
        <img src={logo} alt="Logo" className="w-52 h-16" />
      </div>
      <nav className="flex space-x-4">
        <a href="#" className="text-gray-800 hover:text-blue-600">Home Overview</a>
        <a href="#" className="text-gray-800 hover:text-blue-600">Device Management</a>
        <a href="#" className="text-gray-800 hover:text-blue-600">Project Management</a>
        <a href="#" className="text-gray-800 hover:text-blue-600">System Maintenance</a>
        <a href="#" className="text-gray-800 hover:text-blue-600">Certification</a>
        <a href="#" className="text-gray-800 hover:text-blue-600">Account Management</a>
      </nav>
    </header>
  );
};

export default Header;

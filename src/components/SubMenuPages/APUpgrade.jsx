// src/components/APUpgrade.js
import React from 'react';

const APUpgrade = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-semibold">AP Upgrade</h1>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Batch online upgrade</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Batch local upgrade</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Upload mirror</button>
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded">Refresh</button>
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-2" htmlFor="search-conditions">Search conditions:</label>
        <select className="border py-2 px-4 rounded" id="search-conditions">
          <option>Version</option>
          {/* Add more options as needed */}
        </select>
        <input type="text" className="border py-2 px-4 rounded mx-2" placeholder="Search..." />
        <button className="bg-blue-500 text-white py-2 px-4 rounded">search</button>
        <select className="border py-2 px-4 rounded ml-2">
          <option>Device model filter</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">SN</th>
            <th className="py-2 px-4 border">AP name</th>
            <th className="py-2 px-4 border">IP</th>
            <th className="py-2 px-4 border">MAC</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Device model</th>
            <th className="py-2 px-4 border">Current version</th>
            <th className="py-2 px-4 border">Online upgrade</th>
            <th className="py-2 px-4 border">Upload file and Local upgrade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="9" className="text-center py-4">There is currently no online AP</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default APUpgrade;

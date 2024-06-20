import React, { useState } from 'react';

const APList = () => {
  const [aps, setAps] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded my-6">
        <div className="p-4 flex justify-between items-center border-b">
          <h1 className="text-xl font-semibold">AP List</h1>
          <div className="space-x-2">
            <button className="bg-red-500 text-white px-3 py-1 rounded">Restart AP</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded">Reset AP</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded">Delete AP</button>
            <button className="bg-green-500 text-white px-3 py-1 rounded">Country Code</button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Apply Configuration Template</button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Set Group</button>
            <button className="bg-gray-500 text-white px-3 py-1 rounded">Refresh</button>
          </div>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div className="flex space-x-2">
            <select className="border p-2 rounded">
              <option>All device</option>
            </select>
            <select className="border p-2 rounded">
              <option>device model filter</option>
            </select>
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Search conditions: Device IF" 
              className="border p-2 rounded"
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded ml-2">Search</button>
          </div>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">SN</th>
              <th className="py-2 px-4 border-b">AP name</th>
              <th className="py-2 px-4 border-b">Device IP</th>
              <th className="py-2 px-4 border-b">MAC Address</th>
              <th className="py-2 px-4 border-b">SSID(2.4G/5.8G)</th>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Channel(2.4G/5.8G)</th>
              <th className="py-2 px-4 border-b">Channel Analysis</th>
              <th className="py-2 px-4 border-b">Power</th>
              <th className="py-2 px-4 border-b">AP model</th>
              <th className="py-2 px-4 border-b">AP version</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">AP Location</th>
              <th className="py-2 px-4 border-b">Config</th>
            </tr>
          </thead>
          <tbody>
            {aps.length === 0 ? (
              <tr>
                <td colSpan="14" className="text-center py-4">Currently no equipment is available</td>
              </tr>
            ) : (
              aps.map((ap, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{ap.sn}</td>
                  <td className="py-2 px-4 border-b">{ap.name}</td>
                  <td className="py-2 px-4 border-b">{ap.deviceIP}</td>
                  <td className="py-2 px-4 border-b">{ap.macAddress}</td>
                  <td className="py-2 px-4 border-b">{ap.ssid}</td>
                  <td className="py-2 px-4 border-b">{ap.user}</td>
                  <td className="py-2 px-4 border-b">{ap.channel}</td>
                  <td className="py-2 px-4 border-b">{ap.channelAnalysis}</td>
                  <td className="py-2 px-4 border-b">{ap.power}</td>
                  <td className="py-2 px-4 border-b">{ap.apModel}</td>
                  <td className="py-2 px-4 border-b">{ap.apVersion}</td>
                  <td className="py-2 px-4 border-b">{ap.status}</td>
                  <td className="py-2 px-4 border-b">{ap.location}</td>
                  <td className="py-2 px-4 border-b">{ap.config}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default APList;


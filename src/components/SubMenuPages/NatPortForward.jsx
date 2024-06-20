import React, { useState } from 'react';

const NatPortForward = () => {
  const [activeTab, setActiveTab] = useState('Port forwarding');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">NAT/Port forwarding</h1>
        <div className="border-b border-gray-200 mb-4">
          <ul className="flex">
            {['Port forwarding', 'DMZ host', 'Src NAT', 'Dst NAT'].map((tab) => (
              <li key={tab} className={`mr-1 ${activeTab === tab ? 'border-b-2 border-teal-500' : ''}`}>
                <button
                  className={`inline-block py-2 px-4 text-sm font-medium ${activeTab === tab ? 'text-teal-500' : 'text-gray-500'}`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {activeTab === 'Port forwarding' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <button className="bg-teal-500 text-white px-4 py-2 rounded mr-2">Add</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
              </div>
            </div>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">SN</th>
                  <th className="py-2 px-4 border-b">Protocol</th>
                  <th className="py-2 px-4 border-b">LAN IP</th>
                  <th className="py-2 px-4 border-b">LAN port</th>
                  <th className="py-2 px-4 border-b">WAN port</th>
                  <th className="py-2 px-4 border-b">WAN</th>
                  <th className="py-2 px-4 border-b">Remark</th>
                  <th className="py-2 px-4 border-b">Operation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="8" className="py-2 px-4 border-b text-center text-gray-500">
                    There is no port forwarding rule defined yet. Please <button className="text-teal-500">Add</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab !== 'Port forwarding' && (
          <div className="text-center py-6 text-gray-500">Content for {activeTab} will go here.</div>
        )}
      </div>
    </div>
  );
};

export default NatPortForward;

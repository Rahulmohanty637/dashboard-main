import React, { useState } from 'react';

const PPPOEAuth = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">PPPoE Service</h1>
      </div>
      <div className="bg-gray-100 p-4 rounded shadow">
        <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2 mb-4">
          <div className="flex space-x-4">
            <button className="text-blue-600 font-semibold">PPPoE Service</button>
            <button className="text-gray-600">PPPoE advance option</button>
            <button className="text-gray-600">Access status</button>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4">
            <div className="bg-yellow-100 p-4 mb-4">
              <h2 className="font-semibold mb-2">All LAN ports</h2>
              <div className="bg-white p-2 rounded shadow-sm">LAN1</div>
            </div>
          </div>
          <div className="w-3/4 pl-4">
            <div className="flex items-center mb-4">
              <label className="mr-2">Function enable:</label>
              <button
                className={`px-4 py-2 rounded-full ${isEnabled ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-600'}`}
                onClick={() => setIsEnabled(!isEnabled)}
              >
                {isEnabled ? 'Enabled, Click to disable' : 'Disabled, Click to enable'}
              </button>
            </div>
            <div className="bg-yellow-100 p-4 mb-4 border border-red-500">
              <p>Tips:</p>
              <ol className="list-decimal list-inside">
                <li>
                  After modifying the PPPoE dial-up configuration, the user who has already dialed will disconnect the network and need to dial again!
                </li>
                <li>
                  PPPoE dial-up users, unified in user management, authentication users.
                </li>
              </ol>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPPOEAuth;

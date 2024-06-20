import React, { useState } from 'react';

const L2TP = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleEnable = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-xl font-bold mb-4">L2TP VPN</h1>
        <div className="flex items-center mb-4">
          <span className="mr-2">Function enable:</span>
          <button
            onClick={toggleEnable}
            className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ease-in-out ${
              isEnabled ? 'bg-green-400' : 'bg-gray-400'
            }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                isEnabled ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></div>
          </button>
        </div>
        <p className="text-yellow-600 mb-4">
          <span className="font-bold">!</span> VPN dial-up users need to be added in Authenticated Internet Access -&gt; Authenticated Users -&gt;{' '}
          <a href="/auth-user" className="text-blue-600 underline">Auth user</a>
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
          Save
        </button>
      </div>
    </div>
  );
};

export default L2TP;
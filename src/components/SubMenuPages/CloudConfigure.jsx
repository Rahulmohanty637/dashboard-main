import React, { useState } from 'react';

const CloudConfigure = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [serverAddress, setServerAddress] = useState('https://www.mohrisa.com');

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  const handleSave = () => {
    // Implement save functionality
    console.log('Settings saved:', { isEnabled, serverAddress });
  };

  const handleRegister = () => {
    // Implement register functionality
    console.log('Register clicked');
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Cloud platform configure</h1>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">Function enable:</span>
          <button
            onClick={handleToggle}
            className={`px-4 py-2 rounded-full ${
              isEnabled ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            {isEnabled ? 'Enabled, click to disable' : 'Disabled, click to enable'}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">Cloud server address:</span>
          <input
            type="text"
            value={serverAddress}
            onChange={(e) => setServerAddress(e.target.value)}
            className="border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={handleRegister}
            className="text-blue-500 hover:underline"
          >
            Register
          </button>
        </div>
        <button
          onClick={handleSave}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
        >
          Save configuration
        </button>
      </div>
    </div>
  );
};

export default CloudConfigure;

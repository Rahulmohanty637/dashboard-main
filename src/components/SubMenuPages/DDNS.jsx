import React, { useState } from 'react';

const DDNS= () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Saved', { isEnabled });
  };

  return (
    <div className="min-h-screen flex items-start justify-start bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full">
        <h1 className="text-xl font-bold mb-4">Dynamic domain name configure</h1>
        <div className="mb-4 flex items-center">
          <label className="inline-flex items-center mr-4">
            <span className="text-gray-700 mr-2">Function enable:</span>
            <div
              className={`relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in ${
                isEnabled ? 'bg-green-400' : 'bg-red-400'
              }`}
            >
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={isEnabled}
                onChange={handleToggle}
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <span className={isEnabled ? 'text-green-600' : 'text-red-600'}>
              {isEnabled ? 'Enabled, click to disable' : 'Disabled, click to enable'}
            </span>
          </label>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DDNS;
     

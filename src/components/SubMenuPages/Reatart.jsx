import React from 'react';

const Reatart = () => {
  const handleRestart = () => {
    // Implement the logic to restart the device here
    alert('Device is restarting...');
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-xl font-bold mb-4">Restart Device</h1>
        
        <div className="bg-yellow-200 text-yellow-800 p-4 mb-4 rounded">
          Before rebooting the device, make sure that the device is not in the process of upgrading, otherwise the device may not be able to start and repair!
        </div>
        
        <button
          onClick={handleRestart}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Reboot Device
        </button>
      </div>
    </div>
  );
};

export default Reatart;

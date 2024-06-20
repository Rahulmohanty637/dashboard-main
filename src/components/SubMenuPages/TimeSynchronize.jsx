import React, { useState } from 'react';

const TimeSynchronize = () => {
  const [timeZone, setTimeZone] = useState('(GMT+04:00) United Arab Emirates Dubai, Muscat');
  const [masterTimeServer, setMasterTimeServer] = useState('pool.ntp.org');
  const [alternateTimeServer, setAlternateTimeServer] = useState('time.windows.com');

  const handleSave = () => {
    // Add logic to save the configuration
    console.log('Time Zone:', timeZone);
    console.log('Master Time Server:', masterTimeServer);
    console.log('Alternate Time Server:', alternateTimeServer);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-xl font-bold mb-4">Time Synchronization</h1>
        <p className="text-yellow-600 mb-4">
          <span className="font-bold">!</span> Configure the correct network time server domain name or IP, the device will be timed (30 minutes) synchronize with the server.
        </p>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="time-zone">
            Time Zone:
          </label>
          <select
            id="time-zone"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
          >
            <option value="(GMT+04:00) United Arab Emirates Dubai, Muscat">
              (GMT+04:00) United Arab Emirates Dubai, Muscat
            </option>
            {/* Add more time zones as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="master-time-server">
            Master Time Server:
          </label>
          <input
            type="text"
            id="master-time-server"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={masterTimeServer}
            onChange={(e) => setMasterTimeServer(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="alternate-time-server">
            Alternate Time Server:
          </label>
          <input
            type="text"
            id="alternate-time-server"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={alternateTimeServer}
            onChange={(e) => setAlternateTimeServer(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          onClick={handleSave}
        >
          Save configuration
        </button>
      </div>
    </div>
  );
};

export default TimeSynchronize
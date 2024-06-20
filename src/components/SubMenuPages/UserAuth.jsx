import React, { useState } from 'react';

const UserAuthLog = () => {
  const [logs, setLogs] = useState([]);

  // Sample logs for demonstration
  // Uncomment and replace with actual log fetching logic
  // useEffect(() => {
  //   // Fetch log data and set it to state
  //   fetch('/api/logs')
  //     .then(response => response.json())
  //     .then(data => setLogs(data));
  // }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">User Authentication Log</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-between items-center bg-gray-100 p-4 border-b">
          <span className="text-gray-600">SN</span>
          <span className="text-gray-600">Time</span>
          <span className="text-gray-600">Description</span>
        </div>
        {logs.length === 0 ? (
          <div className="p-4 text-center text-gray-500">There are no records currently</div>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="flex justify-between items-center p-4 border-b">
              <span className="text-gray-800">{log.sn}</span>
              <span className="text-gray-800">{log.time}</span>
              <span className="text-gray-800">{log.description}</span>
            </div>
          ))
        )}
        <div className="flex justify-between items-center p-4">
          <div>
            <button className="text-blue-500 mr-2">Home</button>
            <button className="text-blue-500 mr-2">Pre page</button>
            <button className="text-blue-500 mr-2">Next page</button>
            <button className="text-blue-500">Last Page</button>
          </div>
          <div>
            <input 
              type="number" 
              placeholder="Page" 
              className="border rounded-md p-2 mr-2" 
              min="1" 
            />
            <button className="text-blue-500">GO</button>
          </div>
        </div>
        <div className="p-4 text-gray-500">
          Total {logs.length}, Current page 1
        </div>
      </div>
    </div>
  );
};

export default UserAuthLog;

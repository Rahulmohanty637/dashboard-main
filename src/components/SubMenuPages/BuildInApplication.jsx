import React, { useState} from 'react'

const BuildInApplication = () => {
    
        const [autoUpdateEnabled, setAutoUpdateEnabled] = useState(true);
      
        const toggleAutoUpdate = () => {
          setAutoUpdateEnabled(!autoUpdateEnabled);
        };

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Built-in Application Object</h1>
    
    <div className="mb-4 flex space-x-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Built-in app object
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Built-in app object upgrade
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Built-in app object library
      </button>
    </div>
    
    <div className="mb-4">
      <p className="mb-2">
        Current built-in application object library version <span className="font-bold">V1-20230515</span> is already the latest!
      </p>
    </div>
    
    <div className="flex items-center">
      <p className="mr-4">Auto update built-in app library:</p>
      <button
        onClick={toggleAutoUpdate}
        className={`px-4 py-2 rounded ${
          autoUpdateEnabled ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-500 text-gray-200 hover:bg-gray-600'
        }`}
      >
        {autoUpdateEnabled ? 'Auto update enabled' : 'Auto update disabled'}
      </button>
    </div>
  </div>
  )
}

export default BuildInApplication

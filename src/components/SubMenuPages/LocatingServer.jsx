import React,{useState} from 'react'

const LocatingServer = () => {
    const[isEnabled,setIsEnable] = useState(false);

    const toggleEnabled = () => {
        setIsEnable(!isEnabled);
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log('Function Enabled:', isEnabled);
    };

return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <div className="bg-teal-400 text-white p-4 flex justify-between items-center">
          <div className="font-semibold">
            Locating Server
          </div>
        </div>
        <div className="flex-1 p-6">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-lg mx-auto">
            <h2 className="text-2xl mb-6">Function Enable:</h2>
            <div className="mb-4 flex items-center">
              <button
                onClick={toggleEnabled}
                className={`px-4 py-2 rounded ${
                  isEnabled ? 'bg-green-500' : 'bg-red-500'
                } text-white`}
              >
                {isEnabled ? 'Enabled, click to disable' : 'Disabled, click to enable'}
              </button>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocatingServer

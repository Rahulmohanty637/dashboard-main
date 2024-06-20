import React,{useState} from 'react'


const ApplicationFirewall = () => {
    const[isEnabled,setIsEnabled] = useState(false)

    const toggleEnable = () => {
        setIsEnabled(!isEnabled);
    };

  
  return (
    <div className="p-6 max-w-full mx-auto bg-white shadow-md rounded-lg">
    <h1 className="text-2xl font-bold mb-4">Application Firewall</h1>
    <div className="flex items-center space-x-4">
      <label className="text-lg">Function enable:</label>
      <div
        onClick={toggleEnable}
        className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer ${
          isEnabled ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
        <span
          className={`${
            isEnabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
        />
      </div>
      <span className="ml-3 text-lg">
        {isEnabled ? 'Enabled' : 'Disabled, click to enable'}
      </span>
    </div>
  </div>
  )
}

export default ApplicationFirewall

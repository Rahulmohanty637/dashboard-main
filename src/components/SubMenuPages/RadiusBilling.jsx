import React,{useState} from 'react'

const RadiusBilling = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const handleToggle = () => {
        setIsEnabled(!isEnabled);
      };

      const handleSave = () => {
        alert(`Radius Billing is now ${isEnabled ? 'enabled' : 'disabled'}`);
      };

  return (
     <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Radius Billing</h1>
      <div className="flex items-center mb-4">
        <span className="mr-2 text-lg">Function enable:</span>
        <button
          onClick={handleToggle}
          className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none ${
            isEnabled ? 'bg-green-600' : 'bg-gray-300'
          }`}
        >
          <span
            className={`transform transition ease-in-out duration-200 ${
              isEnabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 bg-white rounded-full`}
          />
        </button>
        <span className="ml-2 text-lg">
          {isEnabled ? 'Enabled, click to disable' : 'Disabled, click to enable'}
        </span>
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  )
}

export default RadiusBilling

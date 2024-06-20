import React,{useState} from 'react'

const VTNUS = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  const handleSave = () => {
   
    console.log('Settings saved:', { isEnabled });
  };
  return (
    <div className="p-6">
    <h1 className="text-xl font-semibold mb-4">VTUNS</h1>
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-lg">Function enable:</span>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-full ${
            isEnabled ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
        >
          {isEnabled ? 'Enabled' : 'Disabled, click to enable'}
        </button>
      </div>
      <button
        onClick={handleSave}
       className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  </div>
  )
}

export default VTNUS

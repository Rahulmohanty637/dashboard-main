import React,{useState} from 'react'

const LANAttack = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const handleToggle = () => {
      setIsEnabled(!isEnabled);
    };
  
    const handleSave = () => {
      alert(`LAN Attack Protection has been ${isEnabled ? 'enabled' : 'disabled'}.`);
     
    };
  return (
    <div className="p-6">
    <h2 className="text-xl font-bold mb-4">LAN Attack Protection</h2>
    <div className="flex items-center mb-4">
      <label className="mr-2">Function enable:</label>
      <button
        className={`px-4 py-2 rounded ${isEnabled ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
        onClick={handleToggle}
      >
        {isEnabled ? 'Enabled, click to disable' : 'Disabled, click to enable'}
      </button>
    </div>
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={handleSave}
    >
      Save
    </button>
  </div>
  )
}

export default LANAttack

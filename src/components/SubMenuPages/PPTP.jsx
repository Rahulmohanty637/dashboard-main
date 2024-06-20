import Reac,{useState} from 'react'

const PPTP = () => {
    const [enabled, setEnabled] = useState(false);
    const [activeTab, setActiveTab] = useState('server');
  
    const toggleEnabled = () => {
      setEnabled(!enabled);
    };
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    const handleSave = () => {
      // Handle the save action
      alert('Settings saved!');
    };
  
    const getButtonClass = (tab) => {
      return activeTab === tab ? 'bg-green-500 text-white' : 'bg-gray-200 text-black';
    };

  return (
  <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">PPTP</h1>
        <div className="mb-4">
          <button
            onClick={toggleEnabled}
            className={`px-4 py-2 rounded ${enabled ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            {enabled ? 'Disable' : 'Enable'}
          </button>
        </div>
        <div className="mb-4 border-b border-gray-200">
          <button
            onClick={() => handleTabClick('server')}
            className={`px-4 py-2 ${getButtonClass('server')}`}
          >
            PPTP VPN server
          </button>
          <button
            onClick={() => handleTabClick('status')}
            className={`px-4 py-2 ${getButtonClass('status')}`}
          >
            PPTP VPN access status
          </button>
        </div>
        {activeTab === 'server' && (
          <div>
            {/* Content for PPTP VPN server */}
            <p>Settings for PPTP VPN server will be here.</p>
          </div>
        )}
        {activeTab === 'status' && (
          <div>
            {/* Content for PPTP VPN access status */}
            <p></p>
          </div>
        )}
        <div className="mt-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default PPTP

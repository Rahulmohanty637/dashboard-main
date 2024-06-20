import React,{useState} from 'react'

const LANAbnormal = () => {
    const [dhcpEnabled, setDhcpEnabled] = useState(false);
    const [loopEnabled, setLoopEnabled] = useState(false);
  
    const toggleDhcp = () => setDhcpEnabled(!dhcpEnabled);
    const toggleLoop = () => setLoopEnabled(!loopEnabled);
    const clearStatus = () => {
      setDhcpEnabled(false);
      setLoopEnabled(false);
    };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">LAN Abnormal Detection</h1>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg">DHCP detection:</span>
          <button 
            onClick={toggleDhcp} 
            className={`px-4 py-2 rounded ${dhcpEnabled ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            {dhcpEnabled ? 'Enabled, click to disable' : 'Disabled, click to enable'}
          </button>
          <span className="text-sm text-gray-500">detect whether there are other DHCP servers in the intranet.</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-lg">Loop detection:</span>
          <button 
            onClick={toggleLoop} 
            className={`px-4 py-2 rounded ${loopEnabled ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            {loopEnabled ? 'Enabled, click to disable' : 'Disabled, click to enable'}
          </button>
          <span className="text-sm text-gray-500">Check whether there are some loops on the intranet (for intranet fault location).</span>
        </div>

        <button 
          onClick={clearStatus} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear status
        </button>

        <div className="text-red-500">
          {!dhcpEnabled && <p>Intranet DHCP service detection result: Please enable 'Intranet DHCP detection' first.</p>}
          {!loopEnabled && <p>Intranet loop detection result: Please enable 'Intranet loop detection' first.</p>}
        </div>
      </div>
    </div>
  )
}

export default LANAbnormal

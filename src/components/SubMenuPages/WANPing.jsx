import React,{useState} from 'react'

const WANPing = () => {
    const [prohibitPing, setProhibitPing] = useState(false);
    const [allowRemoteLogin, setAllowRemoteLogin] = useState(true);
    const [webServicePort, setWebServicePort] = useState(2011);
    const [masterDNS, setMasterDNS] = useState('114.114.114.114');
    const [updateLineOptions, setUpdateLineOptions] = useState('Default');
    const [remoteManagementServer, setRemoteManagementServer] = useState('www.demo.yowifi.net');
    const [deviceName, setDeviceName] = useState('');
    const [displayOnLogin, setDisplayOnLogin] = useState(false);
  
    const handleSave = () => {
      alert('Settings have been saved.');
     
    };
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">WAN Ping Forbid/WAN Login</h2>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={prohibitPing} 
            onChange={() => setProhibitPing(!prohibitPing)} 
            className="mr-2"
          />
          <label>Prohibit ping router from extranet</label>
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={allowRemoteLogin} 
            onChange={() => setAllowRemoteLogin(!allowRemoteLogin)} 
            className="mr-2"
          />
          <label>Allow administrator to log in remotely via extranet IP</label>
        </div>

        <div className="space-y-2">
          <label>WEB service port:</label>
          <input 
            type="number" 
            value={webServicePort} 
            onChange={(e) => setWebServicePort(e.target.value)} 
            className="border p-2 w-full"
          />
        </div>

        <div className="space-y-2">
          <label>Master DNS:</label>
          <input 
            type="text" 
            value={masterDNS} 
            onChange={(e) => setMasterDNS(e.target.value)} 
            className="border p-2 w-full"
          />
          <p className="text-red-500">The DNS server address is needed as a network terminal by the local computer(router)</p>
        </div>

        <div className="space-y-2">
          <label>Update line options:</label>
          <select 
            value={updateLineOptions} 
            onChange={(e) => setUpdateLineOptions(e.target.value)} 
            className="border p-2 w-full"
          >
            <option value="Default">Default</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
          </select>
          <p className="text-red-500">Specify device system upgrades and protocol update lines!</p>
        </div>

        <div className="space-y-2">
          <label>Remote management server:</label>
          <input 
            type="text" 
            value={remoteManagementServer} 
            onChange={(e) => setRemoteManagementServer(e.target.value)} 
            className="border p-2 w-full"
          />
          <p className="text-gray-500">Remote access routing link address: http://f21220041958.demo.yowifi.net:20110</p>
        </div>

        <div className="space-y-2">
          <label>Device name:</label>
          <input 
            type="text" 
            value={deviceName} 
            onChange={(e) => setDeviceName(e.target.value)} 
            className="border p-2 w-full"
          />
          <div className="flex items-center">
            <input 
              type="checkbox" 
              checked={displayOnLogin} 
              onChange={() => setDisplayOnLogin(!displayOnLogin)} 
              className="mr-2"
            />
            <label>Display on the login page</label>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default WANPing

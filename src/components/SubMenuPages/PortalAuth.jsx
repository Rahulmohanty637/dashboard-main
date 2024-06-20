import React, { useState } from 'react';

const PortalAuth = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [serviceProvider, setServiceProvider] = useState('');
  const [serverDomain, setServerDomain] = useState('');
  const [acIp, setAcIp] = useState('');
  const [acName, setAcName] = useState('');
  const [secretKey, setSecretKey] = useState('');

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  const handleSave = () => {
    console.log('Saved:', {
      serviceProvider,
      serverDomain,
      acIp,
      acName,
      secretKey,
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Portal Auth Configure</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg">Function enable:</span>
          <button
            onClick={handleToggle}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ${
              isEnabled ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
                isEnabled ? 'translate-x-6' : ''
              }`}
            ></div>
          </button>
        </div>
        <div className={`${isEnabled ? 'block' : 'hidden'}`}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="serviceProvider">
              Service Provider
            </label>
            <input
              id="serviceProvider"
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={serviceProvider}
              onChange={(e) => setServiceProvider(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="serverDomain">
              Server Domain
            </label>
            <input
              id="serverDomain"
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={serverDomain}
              onChange={(e) => setServerDomain(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="acIp">
              AC IP
            </label>
            <input
              id="acIp"
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={acIp}
              onChange={(e) => setAcIp(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="acName">
              AC Name
            </label>
            <input
              id="acName"
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={acName}
              onChange={(e) => setAcName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="secretKey">
              Secret Key
            </label>
            <input
              id="secretKey"
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={handleSave}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PortalAuth;

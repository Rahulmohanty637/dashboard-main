
import React, { useState } from 'react';

const DomainRedirect = () => {
  const [domains, setDomains] = useState([]);
  const [domainName, setDomainName] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  const handleAdd = () => {
    setDomains([...domains, { domainName, ipAddress }]);
    setDomainName('');
    setIpAddress('');
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Domain Redirect</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domainName">
            Domain Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="domainName"
            type="text"
            placeholder="example.com"
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ipAddress">
            IP Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ipAddress"
            type="text"
            placeholder="192.168.1.1"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setDomains([])}
          >
            Batch Add
          </button>
        </div>
        <div className="mt-6">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">SN</th>
                <th className="py-2">Domain Name</th>
                <th className="py-2">IP</th>
                <th className="py-2">Operation</th>
              </tr>
            </thead>
            <tbody>
              {domains.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    There is no domain name steering defined currently, please add.
                  </td>
                </tr>
              ) : (
                domains.map((domain, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2 text-center">{index + 1}</td>
                    <td className="py-2">{domain.domainName}</td>
                    <td className="py-2">{domain.ipAddress}</td>
                    <td className="py-2 text-center">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => {
                          const newDomains = domains.filter((_, i) => i !== index);
                          setDomains(newDomains);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DomainRedirect;
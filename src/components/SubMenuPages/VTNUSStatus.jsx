import React from 'react';

const VTUNSStatus = () => {
  const data = []; // This would typically come from an API or state

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">VTUNS Status</h1>
      <div className="border rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-3 px-4 border-b">SN</th>
              <th className="py-3 px-4 border-b">Tunnel name/ID</th>
              <th className="py-3 px-4 border-b">Status</th>
              <th className="py-3 px-4 border-b">Online time</th>
              <th className="py-3 px-4 border-b">Upload</th>
              <th className="py-3 px-4 border-b">Download</th>
              <th className="py-3 px-4 border-b">Connection</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                  There is no net-to-net VPN tunnel for the time being!
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-4">{item.sn}</td>
                  <td className="py-3 px-4">{item.tunnelName}</td>
                  <td className="py-3 px-4">{item.status}</td>
                  <td className="py-3 px-4">{item.onlineTime}</td>
                  <td className="py-3 px-4">{item.upload}</td>
                  <td className="py-3 px-4">{item.download}</td>
                  <td className="py-3 px-4">{item.connection}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VTUNSStatus;


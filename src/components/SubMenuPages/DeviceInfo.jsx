import React from 'react';

const DeviceInfo = () => {
  const networkInterfaces = [
    { id: 'WAN1', type: 'WAN port', status: 'Online', mode: '100M/Full duplex', ip: '192.168.1.243', mac: '44-D1-F4-48-72-E1', receiveSpeed: '3.38 KB/S', sendSpeed: '1.37 KB/S' },
    { id: 'LAN4', type: 'LAN port', status: 'Disconnect', mode: '', ip: '', mac: '', receiveSpeed: '', sendSpeed: '' },
    { id: 'LAN3', type: 'LAN port', status: 'Disconnect', mode: '', ip: '', mac: '', receiveSpeed: '', sendSpeed: '' },
    { id: 'LAN2', type: 'LAN port', status: 'Disconnect', mode: '', ip: '', mac: '', receiveSpeed: '', sendSpeed: '' },
    { id: 'LAN1', type: 'LAN port', status: 'Online', mode: '1000M/Full duplex', ip: '172.16.0.1', mac: '44-D1-F4-48-72-DD', receiveSpeed: '1.62 KB/S', sendSpeed: '2.09 KB/S' },
  ];

  const deviceInfo = {
    id: 'Y21220041958',
    maxUsers: 128,
    maxAP: 128,
    uptime: '1:23:17 up 0 days',
    memoryUtilization: '34%',
    memoryUsage: '39.40MB/117.53MB',
    cpuUtilization: '0%',
    connectionMonitoring: '0%',
    onlineUsers: 1,
    model: 'WHG-30',
    firmwareVersion: 'V3.11 B20240423',
  };

  return (
    <div className="container mx-auto p-4">
      
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Network Interface Status</h3>
        <div className="grid grid-cols-5 gap-4 mb-4">
          {networkInterfaces.map((ni, index) => (
            <div key={index} className="bg-gray-100 p-2 text-center">
              <p>{ni.id}</p>
            </div>
          ))}
        </div>
        
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Interface</th>
              <th className="py-2 px-4 border-b">Type</th>
              <th className="py-2 px-4 border-b">Link Mode</th>
              <th className="py-2 px-4 border-b">IP Address</th>
              <th className="py-2 px-4 border-b">MAC Address</th>
              <th className="py-2 px-4 border-b">Receive Speed</th>
              <th className="py-2 px-4 border-b">Send Speed</th>
            </tr>
          </thead>
          <tbody>
            {networkInterfaces.map((ni, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{ni.id}</td>
                <td className="py-2 px-4 border-b">{ni.type}</td>
                <td className="py-2 px-4 border-b">{ni.mode}</td>
                <td className="py-2 px-4 border-b">{ni.ip}</td>
                <td className="py-2 px-4 border-b">{ni.mac}</td>
                <td className="py-2 px-4 border-b">{ni.receiveSpeed}</td>
                <td className="py-2 px-4 border-b">{ni.sendSpeed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Device Basic Information</h3>
        <div className="bg-white p-4 border border-gray-200">
          <p>Device ID: {deviceInfo.id}</p>
          <p>Max Users: {deviceInfo.maxUsers}, Max AP can be managed: {deviceInfo.maxAP}</p>
          <p>Uptime: {deviceInfo.uptime}</p>
          <p>Memory utilization: {deviceInfo.memoryUtilization} ({deviceInfo.memoryUsage})</p>
          <p>CPU utilization: {deviceInfo.cpuUtilization}</p>
          <p>Connection monitoring: {deviceInfo.connectionMonitoring}</p>
          <p>Online users: {deviceInfo.onlineUsers}</p>
          <p>Device model: {deviceInfo.model}</p>
          <p>Firmware version: {deviceInfo.firmwareVersion}</p>
        </div>
      </div>
    </div>
  );
};

export default DeviceInfo;

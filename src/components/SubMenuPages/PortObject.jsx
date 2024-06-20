import React from 'react'


const portObjects = [
    { id: 1, name: 'ANY', protocol: 'TCP&UDP', port: 'Any port' },
    { id: 2, name: 'DNS', protocol: 'UDP', port: 'Port:53' },
    { id: 3, name: 'HTTP', protocol: 'TCP', port: 'Port:80' },
    { id: 4, name: 'ICMP', protocol: 'ICMP', port: 'Port:1' },
    { id: 5, name: 'SSL', protocol: 'TCP', port: 'Port:443' },
    { id: 6, name: 'TCP', protocol: 'TCP', port: 'Any port' },
    { id: 7, name: 'UDP', protocol: 'UDP', port: 'Any port' },
  ];

const PortObject = () => {
  return (
    <div className='p-4'>
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">Port Object</h2>
        <div>
          <button className="px-4 py-2 bg-green-500 text-white rounded mr-2">Add</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">SN</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Content Description</th>
            <th className="py-2 px-4 border-b">Operation</th>
          </tr>
        </thead>
        <tbody>
          {portObjects.map((obj, index) => (
            <tr key={obj.id}>
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{obj.name}</td>
              <td className="py-2 px-4 border-b">
                {`Protocol: ${obj.protocol} ${obj.port}`}
              </td>
              <td className="py-2 px-4 border-b">
                <button className="px-2 py-1 bg-blue-500 text-white rounded mr-2">Edit</button>
                <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PortObject

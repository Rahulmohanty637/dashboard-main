import React, { useEffect, useState } from 'react'

const APEvent = () => {
    const [logs, setLogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLogs, setFilteredLogs] = useState([]);
  
    useEffect(() => {
     
      const dummyLogs = [
        { id: 1, time: '2024-06-03 16:10:55', description: 'Interface: WAN1 online, ip: 192.168.1.243' },
      ];
      setLogs(dummyLogs);
      setFilteredLogs(dummyLogs);
    }, []);
  
    const handleSearch = () => {
      const filtered = logs.filter(log =>
        log.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLogs(filtered);
    };
  return (

    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">AP Event Log</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search logs..."
            className="border p-2 flex-grow mr-2 rounded"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">SN</th>
              <th className="py-2">Time</th>
              <th className="py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log, index) => (
              <tr key={log.id} className="text-center border-t">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{log.time}</td>
                <td className="py-2">{log.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default APEvent

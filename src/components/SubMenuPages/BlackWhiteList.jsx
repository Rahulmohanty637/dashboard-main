import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const BlackWhiteList = () => {
  const [listType, setListType] = useState('disable');
  const [macs, setMacs] = useState([]);
  const [newMac, setNewMac] = useState('');

  const handleAddMac = () => {
    if (newMac && !macs.includes(newMac)) {
      setMacs([...macs, newMac]);
      setNewMac('');
    }
  };

  const handleDeleteMac = (macToDelete) => {
    setMacs(macs.filter((mac) => mac !== macToDelete));
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Black and White List</h2>
        <div className="flex items-center space-x-4 mb-4">
          <label>
            <input
              type="radio"
              name="listType"
              value="disable"
              checked={listType === 'disable'}
              onChange={() => setListType('disable')}
              className="mr-2"
            />
            Disable
          </label>
          <label>
            <input
              type="radio"
              name="listType"
              value="blacklist"
              checked={listType === 'blacklist'}
              onChange={() => setListType('blacklist')}
              className="mr-2"
            />
            Blacklist
          </label>
          <label>
            <input
              type="radio"
              name="listType"
              value="whitelist"
              checked={listType === 'whitelist'}
              onChange={() => setListType('whitelist')}
              className="mr-2"
            />
            Whitelist
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="border border-gray-300 p-2 mr-2"
            placeholder="Enter MAC address"
            value={newMac}
            onChange={(e) => setNewMac(e.target.value)}
          />
          <button
            onClick={handleAddMac}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Access mac
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded mb-4 ml-2">
          Delete
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 border-b">MAC</th>
            <th className="py-2 border-b">Note</th>
            <th className="py-2 border-b">Handle</th>
          </tr>
        </thead>
        <tbody>
          {macs.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center py-4">
                Currently no MACs <span className="text-blue-500 cursor-pointer" onClick={() => setNewMac('')}>Add MAC</span>
              </td>
            </tr>
          ) : (
            macs.map((mac, index) => (
              <tr key={index}>
                <td className="py-2 border-b">{mac}</td>
                <td className="py-2 border-b">Note</td>
                <td className="py-2 border-b">
                  <button
                    onClick={() => handleDeleteMac(mac)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Save
      </button>
    </div>
  );
};

export default BlackWhiteList;


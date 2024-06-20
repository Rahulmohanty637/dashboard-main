import React from 'react';

const BandwidthControl = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Bandwidth Control</h1>
      <div className="flex justify-between items-center mb-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded">Add</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">SN</th>
            <th className="px-4 py-2 border">Source address</th>
            <th className="px-4 py-2 border">Time</th>
            <th className="px-4 py-2 border">Bandwidth limited</th>
            <th className="px-4 py-2 border">Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border" colSpan="5" align="center">
              There is no policy bandwidth control rule defined yet. Please <a href="#" className="text-blue-500">Add</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BandwidthControl;

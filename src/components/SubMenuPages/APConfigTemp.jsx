import React from 'react';

const APConfigTemp= () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">AP configuration template</h1>
        <div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">
            Add template
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Delete template
          </button>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-4 text-gray-600">SN</th>
            <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-4 text-gray-600">Template name</th>
            <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-4 text-gray-600">Device model</th>
            <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-4 text-gray-600">Config</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="py-4 px-4 text-center text-gray-600">Currently no template is available</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default APConfigTemp ;
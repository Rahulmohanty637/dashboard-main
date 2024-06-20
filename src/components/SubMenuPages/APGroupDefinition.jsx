import React from 'react';

const APGroupDefinition= () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">AP Groups</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-4 text-gray-600">SN</th>
            <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-4 text-gray-600">Group Name</th>
            <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-4 text-gray-600">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3" className="py-4 px-4 text-center text-gray-600">
              Currently no grouping <span className="text-blue-500 cursor-pointer">Add</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default APGroupDefinition;
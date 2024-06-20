import React from 'react'

const AuthConfig = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Auth switch</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Free auth IP</button>
      </div>
      <div className="mb-6">
        <label className="text-gray-700 mr-4">One key auth config:</label>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-4">Enable all</button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Disable all</button>
      </div>
      <div className="text-red-500 mb-6">
        Notes: PPPoE authentication switch needs to be used in conjunction with PPPoE authentication, that is, if an interface opens the PPPoE authentication switch, the PPPoE authentication of this interface must be configured.
      </div>
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border border-gray-200">Interface name</th>
            <th className="py-2 px-4 border border-gray-200">PPPoE auth switch</th>
            <th className="py-2 px-4 border border-gray-200">Portal auth switch</th>
            <th className="py-2 px-4 border border-gray-200">IP auth switch</th>
            <th className="py-2 px-4 border border-gray-200">MAC auth switch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border border-gray-200">LAN1</td>
            <td className="py-2 px-4 border border-gray-200">
              <button className="bg-red-500 text-white px-4 py-2 rounded">Disable</button>
            </td>
            <td className="py-2 px-4 border border-gray-200">
              <button className="bg-red-500 text-white px-4 py-2 rounded">Disable</button>
            </td>
            <td className="py-2 px-4 border border-gray-200">
              <button className="bg-red-500 text-white px-4 py-2 rounded">Disable</button>
            </td>
            <td className="py-2 px-4 border border-gray-200">
              <button className="bg-red-500 text-white px-4 py-2 rounded">Disable</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AuthConfig

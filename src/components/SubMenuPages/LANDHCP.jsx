import React from 'react'

const LANDHCP = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="container max-w-6xl bg-white shadow-md rounded p-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          
         
        </div>
        <div className="col-span-9">
          <h2 className="text-xl font-bold mb-4">LAN1 Interface Configure</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold">IP Address</label>
                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" defaultValue="172.16.0.1" />
              </div>
              <div>
                <label className="block font-semibold">Netmask</label>
                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" defaultValue="255.255.0.0" />
              </div>
            </div>
            <div>
              <label className="block font-semibold">Custom MAC</label>
              <input type="checkbox" className="mt-1" />
            </div>
            <div>
              <label className="block font-semibold">Intranet MAC Broadcast</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
                <option>Disable</option>
                <option>Enable</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold">Operation Mode</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
                <option>Self negotiation</option>
                <option>Manual</option>
              </select>
            </div>

            <div className="mt-4">
              <h3 className="font-bold">DHCP Configure</h3>
              <div className="flex items-center mt-2">
                <span className="mr-2">Function Enabled:</span>
                <button type="button" className="bg-green-500 text-white py-1 px-3 rounded">Enabled, click to disable</button>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold">Basic Parameters</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <label className="block">Main DNS</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" defaultValue="172.16.0.1" />
                  </div>
                  <div>
                    <label className="block">Alternate DNS</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" defaultValue="172.16.0.1" />
                  </div>
                  <div>
                    <label className="block">Address Lease Time</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" defaultValue="3600" />
                    <span className="text-sm text-gray-500">sec The default fill in 3600</span>
                  </div>
                  <div>
                    <label className="block">IP Assignment Policy of an AP</label>
                    <div className="mt-1 space-x-4">
                      <label>
                        <input type="radio" name="ip_policy" value="assigned" /> IP assigned only to AP
                      </label>
                      <label>
                        <input type="radio" name="ip_policy" value="not_assigned" /> IP not assigned to AP
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">IP Address Pool</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <label className="block">Start IP</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" defaultValue="172.16.100.1" />
                  </div>
                  <div>
                    <label className="block">End IP</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" defaultValue="172.16.200.255" />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">DHCP Static Allocation</h4>
                <div className="flex items-center justify-between mt-2">
                  <button type="button" className="bg-blue-500 text-white py-1 px-3 rounded">Add</button>
                  <button type="button" className="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
                </div>
                <table className="min-w-full mt-4 border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-2">SN</th>
                      <th className="border border-gray-300 p-2">MAC Address</th>
                      <th className="border border-gray-300 p-2">IP Address</th>
                      <th className="border border-gray-300 p-2">Remarks</th>
                      <th className="border border-gray-300 p-2">Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 text-center" colSpan="5">IP-MAC is not currently defined!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LANDHCP

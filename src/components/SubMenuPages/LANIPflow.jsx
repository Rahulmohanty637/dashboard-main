import React from 'react'

const LANIPflow = () => {
  return (
    <div className="p-4">

    <div className="bg-white border mt-4 p-4">
      <div className="text-center text-lg mb-2">Real time total flow chart</div>
      <div className="border h-64 mb-4 relative">
        {/* Placeholder for the chart */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">Chart goes here</div>
      </div>
      <div className="border-t mt-4">
        <div className="text-center text-lg py-2">User flow</div>
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr>
              <th className="border py-2 px-4">SN</th>
              <th className="border py-2 px-4">IP</th>
              <th className="border py-2 px-4">MAC</th>
              <th className="border py-2 px-4">User</th>
              <th className="border py-2 px-4">Terminal type</th>
              <th className="border py-2 px-4">TCP connection quantity</th>
              <th className="border py-2 px-4">UDP connection quantity</th>
              <th className="border py-2 px-4">Downstream rate (KB/S)</th>
              <th className="border py-2 px-4">Upstream rate (KB/S)</th>
            </tr>
          </thead>
          
        </table>
      </div>
    </div>
  </div>
  )
}

export default LANIPflow

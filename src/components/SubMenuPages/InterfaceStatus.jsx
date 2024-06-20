import React from "react";

const InterfaceStatus = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Interface Status</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">Interface name</th>
              <th className="px-4 py-2">Interface type</th>
              <th className="px-4 py-2">Upstream bandwidth(KB)</th>
              <th className="px-4 py-2">Downstream bandwidth(KB)</th>
              <th className="px-4 py-2">IP</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Connection quantity</th>
              <th className="px-4 py-2">Line quality</th>
              <th className="px-4 py-2">Upstream speed(KB/S)</th>
              <th className="px-4 py-2">Downstream speed(KB/S)</th>
              <th className="px-4 py-2">Total upstream flow</th>
              <th className="px-4 py-2">Total downstream flow</th>
              <th className="px-4 py-2">Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2">One</td>
              <td className="px-4 py-2">Two</td>
              <td className="px-4 py-2">Three</td>
              <td className="px-4 py-2">Four</td>
              <td className="px-4 py-2">Five</td>
              <td className="px-4 py-2">Six</td>
              <td className="px-4 py-2">Seven</td>
              <td className="px-4 py-2">Eight</td>
              <td className="px-4 py-2">Nine</td>
              <td className="px-4 py-2">Ten</td>
              <td className="px-4 py-2">Eleven</td>
              <td className="px-4 py-2">Twelve</td>
              <td className="px-4 py-2 text-blue-500 hover:underline cursor-pointer">
                Info
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InterfaceStatus;

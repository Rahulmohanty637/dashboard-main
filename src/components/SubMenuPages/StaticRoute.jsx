import React, { useState } from 'react';

const staticroute = () => {
  const [routes, setRoutes] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [destinationNetwork, setDestinationNetwork] = useState('');
  const [gateway, setGateway] = useState('');

  const addRoute = () => {
    setRoutes([...routes, { destinationNetwork, gateway }]);
    setDestinationNetwork('');
    setGateway('');
    setShowAddForm(false);
  };

  const removeRoute = (index) => {
    setRoutes(routes.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Static Routing</h1>
      <div className="flex mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          onClick={() => setShowAddForm(true)}
        >
          Add
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setRoutes([])}
        >
          Delete
        </button>
      </div>
      {showAddForm && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Destination Network"
            value={destinationNetwork}
            onChange={(e) => setDestinationNetwork(e.target.value)}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Gateway"
            value={gateway}
            onChange={(e) => setGateway(e.target.value)}
            className="border p-2 mr-2"
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={addRoute}
          >
            Save
          </button>
        </div>
      )}
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">SN</th>
            <th className="border px-4 py-2">Destination Network</th>
            <th className="border px-4 py-2">Gateway</th>
            <th className="border px-4 py-2">Operation</th>
          </tr>
        </thead>
        <tbody>
          {routes.length === 0 ? (
            <tr>
              <td colSpan="4" className="border px-4 py-2 text-center">
                Currently no static routing, please{' '}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setShowAddForm(true)}
                >
                  Add
                </span>
              </td>
            </tr>
          ) : (
            routes.map((route, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{route.destinationNetwork}</td>
                <td className="border px-4 py-2">{route.gateway}</td>
                <td className="border px-4 py-2">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => removeRoute(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default staticroute;

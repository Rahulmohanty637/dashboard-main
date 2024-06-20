import React, { useState } from 'react';

const FreeFlowControl = () => {
  const [rules, setRules] = useState([]);

  const addRule = () => {
    setRules([...rules, { sourceIP: '', destinationIP: '', destinationPort: '', enabled: false }]);
  };

  const deleteRule = (index) => {
    const newRules = [...rules];
    newRules.splice(index, 1);
    setRules(newRules);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Free flow control</h1>
      <div className="bg-yellow-100 border border-yellow-500 text-yellow-900 p-4 mb-4">
        <p>💡 Note: The free flow control IP is not constrained by the smart flow control. Please configure the bandwidth control to limit its maximum bandwidth.</p>
      </div>
      <div className="flex mb-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded mr-2" onClick={addRule}>Add</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">SN</th>
            <th className="py-2 px-4 border-b">Source IP</th>
            <th className="py-2 px-4 border-b">Destination IP</th>
            <th className="py-2 px-4 border-b">Destination port</th>
            <th className="py-2 px-4 border-b">Enable</th>
            <th className="py-2 px-4 border-b">Operation</th>
          </tr>
        </thead>
        <tbody>
          {rules.length === 0 ? (
            <tr>
              <td colSpan="6" className="py-4 text-center">
                There is no free flow control rule defined currently. Please <span className="text-blue-500 cursor-pointer" onClick={addRule}>Add</span>.
              </td>
            </tr>
          ) : (
            rules.map((rule, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b"><input type="text" value={rule.sourceIP} onChange={(e) => updateRule(index, 'sourceIP', e.target.value)} className="border p-2 w-full" /></td>
                <td className="py-2 px-4 border-b"><input type="text" value={rule.destinationIP} onChange={(e) => updateRule(index, 'destinationIP', e.target.value)} className="border p-2 w-full" /></td>
                <td className="py-2 px-4 border-b"><input type="text" value={rule.destinationPort} onChange={(e) => updateRule(index, 'destinationPort', e.target.value)} className="border p-2 w-full" /></td>
                <td className="py-2 px-4 border-b"><input type="checkbox" checked={rule.enabled} onChange={(e) => updateRule(index, 'enabled', e.target.checked)} /></td>
                <td className="py-2 px-4 border-b"><button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => deleteRule(index)}>Delete</button></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

const updateRule = (index, field, value) => {
  setRules((prevRules) => {
    const newRules = [...prevRules];
    newRules[index][field] = value;
    return newRules;
  });
};

export default FreeFlowControl;

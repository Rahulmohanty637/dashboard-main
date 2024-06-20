import React, { useState} from 'react'

const MultiLineDiver = () => {
    const [rules, setRules] = useState([]);

    const addRule = () => {
      setRules([...rules, { id: Date.now(), sourceAddress: '', time: '', destinationPort: '', destinationIP: '', applicationType: '', policy: '' }]);
    };
  
    const deleteRule = (id) => {
      setRules(rules.filter(rule => rule.id !== id));
    };
  
    const moveRule = (index, direction) => {
      const newRules = [...rules];
      const [movedRule] = newRules.splice(index, 1);
      newRules.splice(index + direction, 0, movedRule);
      setRules(newRules);
    };
  
    const handleChange = (id, field, value) => {
      setRules(rules.map(rule => rule.id === id ? { ...rule, [field]: value } : rule));
    };
  return (
<div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Multi-line Diversion Rules</h2>
      <button onClick={addRule} className="mb-4 bg-blue-500 text-white py-2 px-4 rounded">Add</button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Source Address</th>
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Destination Port</th>
            <th className="py-2 px-4 border-b">Destination IP</th>
            <th className="py-2 px-4 border-b">Application Type</th>
            <th className="py-2 px-4 border-b">Policy</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule, index) => (
            <tr key={rule.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={rule.sourceAddress}
                  onChange={(e) => handleChange(rule.id, 'sourceAddress', e.target.value)}
                  className="border rounded py-1 px-2"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={rule.time}
                  onChange={(e) => handleChange(rule.id, 'time', e.target.value)}
                  className="border rounded py-1 px-2"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={rule.destinationPort}
                  onChange={(e) => handleChange(rule.id, 'destinationPort', e.target.value)}
                  className="border rounded py-1 px-2"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={rule.destinationIP}
                  onChange={(e) => handleChange(rule.id, 'destinationIP', e.target.value)}
                  className="border rounded py-1 px-2"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={rule.applicationType}
                  onChange={(e) => handleChange(rule.id, 'applicationType', e.target.value)}
                  className="border rounded py-1 px-2"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={rule.policy}
                  onChange={(e) => handleChange(rule.id, 'policy', e.target.value)}
                  className="border rounded py-1 px-2"
                />
              </td>
              <td className="py-2 px-4 border-b flex items-center space-x-2">
                <button onClick={() => moveRule(index, -1)} disabled={index === 0} className="bg-green-500 text-white py-1 px-2 rounded">↑</button>
                <button onClick={() => moveRule(index, 1)} disabled={index === rules.length - 1} className="bg-green-500 text-white py-1 px-2 rounded">↓</button>
                <button onClick={() => deleteRule(rule.id)} className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MultiLineDiver

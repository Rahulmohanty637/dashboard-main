import React,{useState} from 'react'

const ConQuanLimit = () => {
  const [rules, setRules] = useState([
    { id: 1, sourceAddress: 'ANY', time: 'ANY', tcpQuantity: 5000, udpQuantity: 5000, enabled: true }
  ]);

  const addRule = () => {
    const newRule = {
      id: rules.length + 1,
      sourceAddress: 'ANY',
      time: 'Any',
      tcpQuantity:5000,
      udpQuantity:5000,
      enabled: true
    };
    setRules([...rules, newRule]);
  };
  const deleteRule = (id) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  const toggleEnable = (id) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, enabled: !rule.enabled } : rule
    ));
  };

  const deleteAllRules = () => {
    setRules([]);
  };

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Connection Quantity Limit</h1>
    
    <div className="flex space-x-2 mb-4">
      <button onClick={addRule} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add</button>
      <button onClick={deleteAllRules} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete </button>
    </div>
    
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">SN</th>
          <th className="py-2 px-4 border-b">Source Address Object</th>
          <th className="py-2 px-4 border-b">Time</th>
          <th className="py-2 px-4 border-b">TCP Connection Quantity</th>
          <th className="py-2 px-4 border-b">UDP Connection Quantity</th>
          <th className="py-2 px-4 border-b">Enable</th>
          <th className="py-2 px-4 border-b">Operation</th>
        </tr>
      </thead>
      <tbody>
        {rules.map((rule, index) => (
          <tr key={rule.id}>
            <td className="py-2 px-4 border-b">{index + 1}</td>
            <td className="py-2 px-4 border-b">{rule.sourceAddress}</td>
            <td className="py-2 px-4 border-b">{rule.time}</td>
            <td className="py-2 px-4 border-b">{rule.tcpQuantity}</td>
            <td className="py-2 px-4 border-b">{rule.udpQuantity}</td>
            <td className="py-2 px-4 border-b">
              <input 
                type="checkbox" 
                checked={rule.enabled} 
                onChange={() => toggleEnable(rule.id)} 
                className="mr-2"
              />
            </td>
            <td className="py-2 px-4 border-b">
              <button onClick={() => deleteRule(rule.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default ConQuanLimit

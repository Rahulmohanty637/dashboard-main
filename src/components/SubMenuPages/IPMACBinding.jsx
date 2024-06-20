import React, {useState} from 'react'

const IPMACBinding = () => {
    const [bindings, setBindings] = useState([]);
    const [onlyMACBound, setOnlyMACBound] = useState(false);
    const [newUser, setNewUser] = useState('');
    const [newIpAddress, setNewIpAddress] = useState('');
    const [newMacAddress, setNewMacAddress] = useState('');
  
    const addBinding = () => {
      if (newUser && newIpAddress && newMacAddress) {
        const newBinding = {
          user: newUser,
          ipAddress: newIpAddress,
          macAddress: newMacAddress,
        };
        setBindings([...bindings, newBinding]);
        setNewUser('');
        setNewIpAddress('');
        setNewMacAddress('');
      }
    };
  
    const deleteBinding = (index) => {
      const updatedBindings = bindings.filter((_, i) => i !== index);
      setBindings(updatedBindings);
    };
  
    const toggleOnlyMACBound = () => {
      setOnlyMACBound(!onlyMACBound);
    };
  return (
    <div className='p-4'>
        <h1 className='text-2xl font-bold mb-4'>IP-MAC Binding</h1>

        <div className='flrx space-x-2 mb-4'>
            <input
            type='text'
            placeholder='User'
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            className='px-2 py-1 border rounded mr-2'
            />
            <input
          type="text"
          placeholder="IP Address"
          value={newIpAddress}
          onChange={(e) => setNewIpAddress(e.target.value)}
          className="px-2 py-1 border rounded mr-2"
        />
        <input
          type="text"
          placeholder="MAC Address"
          value={newMacAddress}
          onChange={(e) => setNewMacAddress(e.target.value)}
          className="px-2 py-1 border rounded mr-2"
        />
        <button
          onClick={addBinding}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Batch add
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          One-click to bind all
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel all bind
        </button>
        <label className='flex items-center'>
        <input type="checkbox" checked={onlyMACBound} onChange={toggleOnlyMACBound} className="mr-2" />
        Only MAC-bound terminals are allowed to access the Internet
        </label>

        </div>
        <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">SN</th>
            <th className="py-2 px-4 border-b">User</th>
            <th className="py-2 px-4 border-b">IP Address</th>
            <th className="py-2 px-4 border-b">MAC Address</th>
            <th className="py-2 px-4 border-b">Operation</th>
          </tr>
        </thead>
        <tbody>
          {bindings.length === 0 ? (
            <tr>
              <td colSpan="5" className="py-2 px-4 text-center">
                No MAC address is currently bound, please <span onClick={addBinding} className="text-blue-500 cursor-pointer">Add</span>
              </td>
            </tr>
          ) : (
            bindings.map((binding, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{binding.user}</td>
                <td className="py-2 px-4 border-b">{binding.ipAddress}</td>
                <td className="py-2 px-4 border-b">{binding.macAddress}</td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <button
                    onClick={() => deleteBinding(index)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Enable
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      
    </div>
  )
}

export default IPMACBinding

import React,{useState} from 'react'

const SourceIPObject = () => {
    const [ipObjects, setIpObjects] = useState([{ id: 1, name: 'ANY', range: 'Any address' }]);
  const [name, setName] = useState('');
  const [range, setRange] = useState('');

  const handleAdd = () => {
    if (name && range) {
      setIpObjects([...ipObjects, { id: Date.now(), name, range }]);
      setName('');
      setRange('');
    } else {
      alert('Both fields are required.');
    }
  };

  const handleDelete = (id) => {
    setIpObjects(ipObjects.filter((obj) => obj.id !== id));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Source IP Object</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="range">
            Address Range
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="range"
            type="text"
            placeholder="e.g., 192.168.1.0/24"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div className="mt-6">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">SN</th>
                <th className="py-2">Name</th>
                <th className="py-2">Address Range</th>
                <th className="py-2">Operation</th>
              </tr>
            </thead>
            <tbody>
              {ipObjects.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No IP objects defined, please add.
                  </td>
                </tr>
              ) : (
                ipObjects.map((obj, index) => (
                  <tr key={obj.id} className="border-t">
                    <td className="py-2 text-center">{index + 1}</td>
                    <td className="py-2">{obj.name}</td>
                    <td className="py-2">{obj.range}</td>
                    <td className="py-2 text-center">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(obj.id)}
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
      </div>
    </div>
  )
}

export default SourceIPObject

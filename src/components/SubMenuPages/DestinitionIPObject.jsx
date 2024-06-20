import React, {useState} from 'react'

const DestinitionIPObject = () => {
  const [ipObjects, setIpObjects] = useState([]);

  const handleAdd = () => {
    const newIp = { id: ipObjects.length + 1, name:'', remark: ''};
    setIpObjects([...ipObjects,newIp])
  };

  const handleDelete = (id) => {
    const updatedIpObjects = ipObjects.filter((obj) => obj.id !==id)
    setIpObjects(updatedIpObjects)
  };

  const handleNameChange = (id, value) => {
    const updatedIpObjects = ipObjects.map((item) =>
      item.id === id ? {...item, name: value} : item
    );
    setIpObjects(updatedIpObjects)
  };

  const handleRemarkChange = (id,value) => {
    const updatedIpObjects = ipObjects.map((item) =>
      item.id === id ? {...item, remark: value} : item
    );
    setIpObjects(updatedIpObjects);
  }

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Destination IP Object</h1>
    <button
      onClick={handleAdd}
      className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Add
    </button>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Remark</th>
            <th className="px-4 py-2 border">Operation</th>
          </tr>
        </thead>
        <tbody>
          {ipObjects.map((obj) => (
            <tr key={obj.id}>
              <td className="px-4 py-2 border">{obj.id}</td>
              <td className="px-4 py-2 border">
                <input
                  type="text"
                  value={obj.name}
                  onChange={(e) => handleNameChange(obj.id, e.target.value)}
                  className="px-2 py-1 border rounded"
                />
              </td>
              <td className="px-4 py-2 border">
                <input
                  type="text"
                  value={obj.remark}
                  onChange={(e) => handleRemarkChange(obj.id, e.target.value)}
                  className="px-2 py-1 border rounded"
                />
              </td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => handleDelete(obj.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default DestinitionIPObject

import React, {useState} from 'react'

const CustomApplication = () => {
    const[appObjects, setAppObjects] = useState([])
    const[newAppName, setNewAppName] = useState('')
    const[newAppType, setNewAppType] = useState('')
    const[newAppDesc, setNewAppDesc] = useState('')

    const handleAdd = () => {
        const newApp = { id: appObjects.length + 1, name: newAppName, type: newAppType, description: newAppDesc}
        setAppObjects([...appObjects,newApp])
        setNewAppName('')
        setNewAppType('')
        setNewAppDesc('')
    };

    const handleEdit = (id,key, value) => {
        const updatedAppObjects = appObjects.map((onj) => (obj.id === id ? {...obj, [key]: value} : obj))
        setAppObjects(updatedAppObjects)
    }

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Custom Application Object</h1>
    
    <div className="mb-4">
      <input
        type="text"
        placeholder="App Name"
        value={newAppName}
        onChange={(e) => setNewAppName(e.target.value)}
        className="px-2 py-1 border rounded mr-2"
      />
      <input
        type="text"
        placeholder="App Type"
        value={newAppType}
        onChange={(e) => setNewAppType(e.target.value)}
        className="px-2 py-1 border rounded mr-2"
      />
      <input
        type="text"
        placeholder="Description"
        value={newAppDesc}
        onChange={(e) => setNewAppDesc(e.target.value)}
        className="px-2 py-1 border rounded mr-2"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
    
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">SN</th>
            <th className="px-4 py-2 border">App Name</th>
            <th className="px-4 py-2 border">App Type</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Operation</th>
          </tr>
        </thead>
        <tbody>
          {appObjects.map((obj) => (
            <tr key={obj.id}>
              <td className="px-4 py-2 border">{obj.id}</td>
              <td className="px-4 py-2 border">
                <input
                  type="text"
                  value={obj.name}
                  onChange={(e) => handleEdit(obj.id, 'name', e.target.value)}
                  className="px-2 py-1 border rounded"
                />
              </td>
              <td className="px-4 py-2 border">
                <input
                  type="text"
                  value={obj.type}
                  onChange={(e) => handleEdit(obj.id, 'type', e.target.value)}
                  className="px-2 py-1 border rounded"
                />
              </td>
              <td className="px-4 py-2 border">
                <input
                  type="text"
                  value={obj.description}
                  onChange={(e) => handleEdit(obj.id, 'description', e.target.value)}
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

export default CustomApplication

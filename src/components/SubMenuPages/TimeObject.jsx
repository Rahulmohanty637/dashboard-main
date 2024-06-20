import React, { useState } from 'react'

const TimeObject = () => {
    const [timeObjects, setTimeObjects] = useState([
        { id:1, name: 'ANY' , days: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat', period: 'Any time'}
    ]);
    const [newTimeObject, setNewTimeObject] = useState({name: '', days: '', period: ''});

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewTimeObject({...newTimeObject, [name]: value})
    }
    const handleAddTimeObject = () => {
        if (newTimeObject.name && newTimeObject.days && newTimeObject.period) {
          setTimeObjects([...timeObjects, { ...newTimeObject, id: Date.now() }]);
          setNewTimeObject({ name: '', days: '', period: '' });
        } else {
          alert("All fields are required");
        }
      };
    
      const handleDeleteTimeObject = (id) => {
        setTimeObjects(timeObjects.filter((obj) => obj.id !== id));
      };

  return (
    <div className="p-6 max-w-full mx-auto bg-white shadow-md rounded-lg">
    <h1 className="text-2xl font-bold mb-4">Time Object</h1>
    <div className="flex mb-4">
      <input
        type="text"
        name="name"
        value={newTimeObject.name}
        onChange={handleInputChange}
        placeholder="Name"
        className="px-2 py-2 border rounded-lg mr-2"
      />
      <input
        type="text"
        name="days"
        value={newTimeObject.days}
        onChange={handleInputChange}
        placeholder="Days (e.g., Sun,Mon,...)"
        className="px-2 py-2 border rounded-lg mr-2"
      />
      <input
        type="text"
        name="period"
        value={newTimeObject.period}
        onChange={handleInputChange}
        placeholder="Time Period"
        className="px-2 py-2 border rounded-lg mr-2"
      />
      <button
        onClick={handleAddTimeObject}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 border">SN</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Days</th>
            <th className="px-4 py-2 border">Time Period</th>
            <th className="px-4 py-2 border">Operation</th>
          </tr>
        </thead>
        <tbody>
          {timeObjects.length === 0 ? (
            <tr>
              <td className="px-4 py-2 border" colSpan="5" align="center">
                No records currently
              </td>
            </tr>
          ) : (
            timeObjects.map((obj, index) => (
              <tr key={obj.id}>
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{obj.name}</td>
                <td className="px-4 py-2 border">{obj.days}</td>
                <td className="px-4 py-2 border">{obj.period}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleDeleteTimeObject(obj.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
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
  )
}

export default TimeObject

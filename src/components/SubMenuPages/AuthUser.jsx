import React,{useState} from 'react'

const AuthUser = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        alert(`Searching for: ${searchQuery}`)
    };
    const handleAddUser = () => {
        alert('Add user clicked')
    };

  return (
    <div className='p-6 max-w-full mx-auto bg-white shadow-md rounded-lg'>
        <h1 className='text-2xl font-bold mb-4'>Authentication User</h1>
        <div className='flex flex-wrap items-center mb-4 space-x-2'>
            <button
            onClick={handleAddUser}
            className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
            >
                Add

            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Batch add
        </button>
        <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
          Enable all
        </button>
        <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
          Export
        </button>
        <select className="px-2 py-2 border rounded-lg">
          <option>User department</option>
          
        </select>
        <select className="px-2 py-2 border rounded-lg">
          <option>User level filter</option>
          
        </select>
        <select className="px-2 py-2 border rounded-lg">
          <option>User type filter</option>
        
        </select>
        <select className="px-2 py-2 border rounded-lg">
          <option>Status</option>
          
        </select>
        <input
          type="text"
          className="px-2 py-2 border rounded-lg"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border">SN</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Department</th>
              <th className="px-4 py-2 border">User level</th>
              <th className="px-4 py-2 border">User type</th>
              <th className="px-4 py-2 border">Notes</th>
              <th className="px-4 py-2 border">Create time</th>
              <th className="px-4 py-2 border">Due time</th>
              <th className="px-4 py-2 border">Operation</th>
            </tr>
          </thead>
          <tbody>
            {/* Render user rows here */}
            <tr>
              <td className="px-4 py-2 border" colSpan="9" align="center">
                Currently no authenticated user, please <span className="text-blue-600 cursor-pointer" onClick={handleAddUser}>Add</span>
              </td>
            </tr>
          </tbody>
        </table>


        </div>
      
    </div>
  )
}

export default AuthUser

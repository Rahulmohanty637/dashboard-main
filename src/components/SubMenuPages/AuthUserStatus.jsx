import React,{useState} from 'react'

const AuthUserStatus = () => {
    const [filters, setFilters] = useState({
        userLevel: '',
        userType: '',
        dueTime: '',
        status: '',
        account: '',
        searchQuery: '',
      });
      const handleInputChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
      };
    
      const handleSearch = () => {
         alert(`Searching for: ${JSON.stringify(filters)}`);
      };

  return (
   <div className="p-6 max-w-full mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Auth User Status</h1>
      <div className="flex flex-wrap items-center mb-4 space-x-2">
        <select
          name="userLevel"
          value={filters.userLevel}
          onChange={handleInputChange}
          className="px-2 py-2 border rounded-lg"
        >
          <option value="">User level filter</option>
          {/* Add more options as needed */}
        </select>
        <select
          name="userType"
          value={filters.userType}
          onChange={handleInputChange}
          className="px-2 py-2 border rounded-lg"
        >
          <option value="">User type filter</option>
          {/* Add more options as needed */}
        </select>
        <select
          name="dueTime"
          value={filters.dueTime}
          onChange={handleInputChange}
          className="px-2 py-2 border rounded-lg"
        >
          <option value="">Due time filter</option>
          {/* Add more options as needed */}
        </select>
        <select
          name="status"
          value={filters.status}
          onChange={handleInputChange}
          className="px-2 py-2 border rounded-lg"
        >
          <option value="">Status</option>
          {/* Add more options as needed */}
        </select>
        <select
          name="account"
          value={filters.account}
          onChange={handleInputChange}
          className="px-2 py-2 border rounded-lg"
        >
          <option value="">Account</option>
          {/* Add more options as needed */}
        </select>
        <input
          type="text"
          name="searchQuery"
          value={filters.searchQuery}
          onChange={handleInputChange}
          className="px-2 py-2 border rounded-lg"
          placeholder="Search"
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
              <th className="px-4 py-2 border">User</th>
              <th className="px-4 py-2 border">Level</th>
              <th className="px-4 py-2 border">Tel</th>
              <th className="px-4 py-2 border">Address/Remark</th>
              <th className="px-4 py-2 border">Due time</th>
              <th className="px-4 py-2 border">IP</th>
              <th className="px-4 py-2 border">Online status</th>
              <th className="px-4 py-2 border">Auth status</th>
            </tr>
          </thead>
          <tbody>
            {/* Render user status rows here */}
            <tr>
              <td className="px-4 py-2 border" colSpan="9" align="center">
                No record currently
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AuthUserStatus

import React,{useState} from 'react'

const DepartmentLevelDefination = () => {
    const [activeTab,setActiveTab] = useState(`department`);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleAdd = () => {
        alert('Add button clicked')
    };

  return (
    <div className='p-6 max-w-full mx-auto bg-white shadow-md rounded-lg'>
        <h1 className='text-2xl font-bold mb-4'>Department/Level Definition</h1>
        <div className='flex space-x-4 mb-4'>
            <button
            onClick={() => handleTabClick('department')}
            className= {`px-4 py-2 rounded-t-lg $ {activeTab == 'department' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}          
            >
                Department division
            </button>
            <button
          onClick={() => handleTabClick('level')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'level' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
        >
          Level division
        </button>
            </div>
            <div className="bg-teal-100 p-4 rounded-b-lg border border-teal-500">
        <p className="text-sm text-gray-800">
          Department division purposes: User objects must choose the departments they belong to, so before defining users, they need to divide departments. For companies, departments are usually divided according to administrative departments, such as sales department, production department, etc. For residential areas, departments are usually divided according to the location of access users, such as: East 35 buildings, West 88 buildings. After dividing the departments, users can make various control rules according to the dividing departments.
        </p>
      </div>
      <button
        onClick={handleAdd}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add
      </button>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border">SN</th>
              <th className="px-4 py-2 border">Department name</th>
              <th className="px-4 py-2 border">Operation</th>
            </tr>
          </thead>
          <tbody>
            {/* Render department rows here */}
            <tr>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">default</td>
              <td className="px-4 py-2 border">
                {/* Add operation buttons/icons here */}
                <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
            {/* Placeholder for no departments */}
            <tr>
              <td className="px-4 py-2 border" colSpan="3" align="center">
                No departments currently
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default DepartmentLevelDefination

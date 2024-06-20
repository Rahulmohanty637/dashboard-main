import React, { useState } from 'react';

const TimedTask = () => {
  const [activeTab, setActiveTab] = useState('Timed task');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = { id: tasks.length + 1, type: 'New Task', executionTime: '', description: '', enable: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-xl font-bold mb-4">Timed Task</h1>

        <div className="flex mb-4">
          <button
            className={`py-2 px-4 rounded-l ${activeTab === 'Timed task' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('Timed task')}
          >
            Timed task
          </button>
          <button
            className={`py-2 px-4 rounded-r ${activeTab === 'Temporary task' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('Temporary task')}
          >
            Temporary task
          </button>
        </div>

        <div className="flex justify-between mb-4">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
            onClick={addTask}
          >
            Add
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
            onClick={() => deleteTask(tasks[tasks.length - 1]?.id)} // Deletes the last task
          >
            Delete
          </button>
        </div>

        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">SN</th>
              <th className="py-2 px-4 border-b">Type</th>
              <th className="py-2 px-4 border-b">Execution time</th>
              <th className="py-2 px-4 border-b">Task description</th>
              <th className="py-2 px-4 border-b">Enable</th>
              <th className="py-2 px-4 border-b">Operation</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">No tasks have been defined yet. Please add a task.</td>
              </tr>
            ) : (
              tasks.map((task, index) => (
                <tr key={task.id}>
                  <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                  <td className="py-2 px-4 border-b text-center">{task.type}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <input
                      type="text"
                      value={task.executionTime}
                      onChange={(e) => {
                        const newTasks = tasks.slice();
                        newTasks[index].executionTime = e.target.value;
                        setTasks(newTasks);
                      }}
                      className="border p-1 rounded w-full"
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <input
                      type="text"
                      value={task.description}
                      onChange={(e) => {
                        const newTasks = tasks.slice();
                        newTasks[index].description = e.target.value;
                        setTasks(newTasks);
                      }}
                      className="border p-1 rounded w-full"
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <input
                      type="checkbox"
                      checked={task.enable}
                      onChange={(e) => {
                        const newTasks = tasks.slice();
                        newTasks[index].enable = e.target.checked;
                        setTasks(newTasks);
                      }}
                      className="border p-1 rounded"
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 transition duration-200"
                      onClick={() => deleteTask(task.id)}
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
  );
};

export default TimedTask;

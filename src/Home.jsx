import React,{useState} from 'react';
import ProjectCard from './components/ProjectCard';
import UserActivityChart from './components/UserActivityChart';

const Home = () => {
  
 
  return(
  <div  className='p-4'>
    <header className='flex justify-between items-center mb-4'>
      <h1 className='text-2xl font-bold'>CloudNetIot</h1>
      <nav className='flex items-center'>
      <ul className="flex space-x-4 items-center mr-4">
            <li className="px-4 py-2 border rounded hover:bg-blue-400 cursor-pointer">Home</li>
            <li className="px-4 py-2 border rounded hover:bg-blue-400 cursor-pointer">Device</li>
            <li className="px-4 py-2 border rounded hover:bg-blue-400 cursor-pointer">Project</li>
            <li className="px-4 py-2 border rounded hover:bg-blue-400 cursor-pointer">Maintenance</li>
            <li className="px-4 py-2 border rounded hover:bg-blue-400 cursor-pointer">Auth</li>
            <li className="px-4 py-2 border rounded hover:bg-blue-400 cursor-pointer">Account</li>
          </ul>
        </nav>
    </header>
    <div className='grid grid-cols-4 gap-4 mb-4'>
      <div>Total Device: 0</div>
      <div>Online Total: 0</div>
      <div>Alarm Total: 0</div>
      <div>Offline Total: 0</div>
      <div>Inspection Report: 0</div>
      <div>Pending Project: 0</div>
      <div>Account Change: 0</div>

    </div>
    <section className="mb-4">
        <h2 className="text-xl font-bold">Project Info</h2>
        <div className="grid grid-cols-3 gap-4">
          <ProjectCard title="My Project" creationTime="2024-06-10 16:59:48" />
          <ProjectCard title="BBSR" creationTime="2024-06-10 17:02:58" />
          <div className="border border-gray-300 p-4 rounded">No project info</div>
        </div>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-bold">Device Statistics</h2>
        <div className="border border-gray-300 p-4 rounded">No device info</div>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-bold">User Activity</h2>
        <UserActivityChart />
      </section>
      <section>
        <h2 className="text-xl font-bold">Configuration Log</h2>
        <div className="border border-gray-300 p-4 rounded mb-2">Login Time: 2024-06-10 17:00 | Device: 44:D1:FA:B2:56:09 | Content: Modify device W...</div>
        <div className="border border-gray-300 p-4 rounded">Login Time: 2024-06-10 17:00 | Device: 44:D1:FA:B7:FC:93 | Content: Modify device W...</div>
      </section>

</div>
);
};

export default Home;

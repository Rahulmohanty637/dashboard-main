import React from "react";

const Dashboard = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-2">Resource Statistics</h2>
          <div className="space-y-2">
            <p>Total number of devices: 0</p>
            <p>Total number of online: 0</p>
            <p>Total number of alarms: 0</p>
            <p>Total offline: 0</p>
            <p>Inspection report: 0</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-2">Project Information</h2>
          <div className="space-y-2">
            <div className="p-2 border rounded">
              <h3 className="font-bold">My project</h3>
              <p>Creation time: 2024-06-10 16:59:48</p>
              <p>No device connected</p>
            </div>
            <div className="p-2 border rounded">
              <h3 className="font-bold">BBSR</h3>
              <p>Creation time: 2024-06-10 17:02:58</p>
              <p>No device connected</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-2">Pending Information</h2>
          <div className="space-y-2">
            <p>Projects to be received: 0</p>
            <p>Account Changes: 0</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">User Activity</h2>
        <p>Graph placeholder (e.g., user activity over the last three days)</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-2">Operation Log</h2>
        <div className="space-y-2">
          <p>Log in time: 2024-06-10 17:00 - Login Account: MohrisaTech</p>
          <p>Device: 44:D1:FA:B2:56:09 - Operation: Modify device</p>
          <p>Log in time: 2024-06-10 17:00 - Login Account: MohrisaTech</p>
          <p>Device: 44:D1:FA:B7:E7:C9 - Operation: Modify device</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

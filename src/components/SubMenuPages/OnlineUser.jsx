import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';

const OnlineUser = () => {
  const [data, setData] = useState({
    labels: [
      "06/03 16:48", "06/03 16:56", "06/03 17:05", "06/03 17:13", 
      "06/03 17:21", "06/03 17:30", "06/03 17:38", "06/03 17:46", 
      "06/03 17:55", "06/03 18:03", "06/03 18:11", "06/03 18:20" 
    ],
    datasets: [{
      label: 'Number of people',
      data: [1, 1.2, 1.5, 1.3, 1.7, 2, 1.8, 2.1, 2.3, 2.4, 2.5, 2.6],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    }]
  });

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of people'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Online User Log</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="flex items-center mb-4">
          <label className="mr-4">User number</label>
          <input type="checkbox" className="form-checkbox" />
          <label className="ml-6 mr-4">IP quantity</label>
          <input type="checkbox" className="form-checkbox" />
        </div>
        <div className="mb-4">
          <label>Period of time:</label>
          <input type="date" className="ml-2 border p-2" />
          <input type="date" className="ml-2 border p-2" />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Inquire</button>
        </div>
        <div className="mb-4">
          <a href="#" className="text-blue-500 mr-2">Today</a>
          <a href="#" className="text-blue-500 mr-2">Yesterday</a>
          <a href="#" className="text-blue-500 mr-2">The day before yesterday</a>
          <a href="#" className="text-blue-500 mr-2">Nearly two days</a>
          <a href="#" className="text-blue-500 mr-2">Nearly three days</a>
          <a href="#" className="text-blue-500 mr-2">Nearly one week</a>
        </div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default OnlineUser;

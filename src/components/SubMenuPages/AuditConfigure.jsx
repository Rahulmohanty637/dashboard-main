// src/components/AuditForm.js

// src/components/AuditForm.js

import React, { useState } from 'react';

const AuditConfigure= () => {
  const [formData, setFormData] = useState({
    securityFactoryCode: '',
    dataCollectionPlaceCode: '',
    dataTransmissionCode: '',
    ftpIP: '',
    ftpPort: '',
    ftpUsername: '',
    ftpPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl mb-6">Audit Parameters</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Security Factory Code:</label>
        <input
          type="text"
          name="securityFactoryCode"
          value={formData.securityFactoryCode}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Code of data collection place:</label>
        <input
          type="text"
          name="dataCollectionPlaceCode"
          value={formData.dataCollectionPlaceCode}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">The code of data transmission:</label>
        <input
          type="text"
          name="dataTransmissionCode"
          value={formData.dataTransmissionCode}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">FTP IP:</label>
        <input
          type="text"
          name="ftpIP"
          value={formData.ftpIP}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">FTP PORT:</label>
        <input
          type="number"
          name="ftpPort"
          value={formData.ftpPort}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">FTP username:</label>
        <input
          type="text"
          name="ftpUsername"
          value={formData.ftpUsername}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">FTP password:</label>
        <input
          type="password"
          name="ftpPassword"
          value={formData.ftpPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
};

export default AuditConfigure;

import React, { useState } from 'react';

const PhysicalPortDefinition = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [mergeLanPorts, setMergeLanPorts] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleMergeChange = () => {
    setMergeLanPorts(!mergeLanPorts);
  };

  const handleSubmit = () => {
    // Handle save logic here
    console.log('Saved', { selectedOption, mergeLanPorts });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-xl font-bold mb-4">Physical Port Definition</h1>
        <div className="mb-4">
          {['4LAN + 1WAN', '3LAN + 2WAN', '2LAN + 3WAN', '1LAN + 4WAN'].map((option) => (
            <div key={option} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="portDefinition"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                <span className="ml-2">{option}</span>
              </label>
              <div className="flex space-x-2 mt-2">
                {option.split(' + ').map((ports, index) => (
                  <div key={index} className="flex space-x-2">
                    {Array.from({ length: parseInt(ports) }, (_, i) => (
                      <div
                        key={i}
                        className={`w-16 h-16 border ${index === 0 ? 'bg-yellow-200' : 'bg-green-200'} flex items-center justify-center`}
                      >
                        {index === 0 ? `LAN${i + 1}` : `WAN${i + 1}`}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={mergeLanPorts}
              onChange={handleMergeChange}
            />
            <span className="ml-2">Merge all LAN ports into LAN1</span>
          </label>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleSubmit}
        >
          Save
        </button>
        <p className="text-red-500 mt-4">
          Note: After the physical port feature definition is modified, the router needs to be reconfigured.
        </p>
      </div>
    </div>
  );
};

export default PhysicalPortDefinition;

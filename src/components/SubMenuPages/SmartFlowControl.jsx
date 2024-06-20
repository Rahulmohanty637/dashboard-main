import React, { useState } from 'react';

const SmartFlowControl = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [upstreamBandwidth, setUpstreamBandwidth] = useState(100000);
  const [downstreamBandwidth, setDownstreamBandwidth] = useState(100000);

  const toggleEnabled = () => {
    setIsEnabled(!isEnabled);
  };

  const handleSave = () => {
    // Implement save logic here
    alert('Configuration saved.');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Smart Flow Control</h1>
      <div className="flex items-center mb-4">
        <span className="mr-2">Function enable:</span>
        <button
          className={`px-4 py-2 rounded ${isEnabled ? 'bg-green-500 text-white' : 'bg-gray-500 text-black'}`}
          onClick={toggleEnabled}
        >
          {isEnabled ? 'Enabled, click to disable' : 'Disabled, click to enable'}
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Upstream bandwidth</label>
        <input
          type="number"
          value={upstreamBandwidth}
          onChange={(e) => setUpstreamBandwidth(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <div className="flex space-x-2">
          {['512Kbps', '1Mbps', '2Mbps', '4Mbps', '5Mbps', '6Mbps', '10Mbps'].map((bw) => (
            <span
              key={bw}
              className="cursor-pointer text-blue-500"
              onClick={() => setUpstreamBandwidth(parseInt(bw) * 1000)}
            >
              {bw}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Downstream bandwidth</label>
        <input
          type="number"
          value={downstreamBandwidth}
          onChange={(e) => setDownstreamBandwidth(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <div className="flex space-x-2">
          {['4Mbps', '5Mbps', '10Mbps', '20Mbps', '50Mbps', '100Mbps', '200Mbps'].map((bw) => (
            <span
              key={bw}
              className="cursor-pointer text-blue-500"
              onClick={() => setDownstreamBandwidth(parseInt(bw) * 1000)}
            >
              {bw}
            </span>
          ))}
        </div>
      </div>
      <div className="text-yellow-600 mb-4">
        <p className="mb-2">💡 To ensure the excellent flow control effect, the WAN's upstream and downstream bandwidth must be configured correctly</p>
        <p>💡 The bandwidth given by operators is usually in bit/s as unit: bps. The actual forwarding rate of the router is in bytes (BYTE/s); Bps. So please pay attention to conversion. Suggest to use the bit rate given by the operator divided by 10.</p>
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default SmartFlowControl;

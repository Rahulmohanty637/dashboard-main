import React, { useState } from 'react';

const PingDetection = () => {
    const [pingIP, setPingIP] = useState('');
    const [wanPort, setWanPort] = useState('');
    const [result, setResult] = useState(null);

    const handlePing = () => {
        // Simulate a ping operation (you'd replace this with actual ping logic)
        setResult(`Ping to ${pingIP} via port ${wanPort} was successful!`);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Ping inspection - single ping</h2>
                <div className="mb-4">
                    <label htmlFor="wanPort" className="block text-sm font-medium text-gray-700">Select WAN port</label>
                    <select
                        id="wanPort"
                        value={wanPort}
                        onChange={(e) => setWanPort(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="">Select WAN port</option>
                        <option value="WAN1">WAN1</option>
                        <option value="WAN2">WAN2</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="pingIP" className="block text-sm font-medium text-gray-700">Ping IP</label>
                    <input
                        type="text"
                        id="pingIP"
                        value={pingIP}
                        onChange={(e) => setPingIP(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    onClick={handlePing}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Start
                </button>
                {result && (
                    <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                        {result}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PingDetection;

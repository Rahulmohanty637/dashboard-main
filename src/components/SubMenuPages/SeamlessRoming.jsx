import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const SeamlessRoaming = () => {
  const [handover2G, setHandover2G] = useState(-75);
  const [handover5G, setHandover5G] = useState(-70);
  const [enableRoaming, setEnableRoaming] = useState(true);
  const [enable5GFirst, setEnable5GFirst] = useState(true);

  const handleSave = () => {
    // Handle save logic here
    alert('Settings saved');
  };

  return (
    <div className='p-6 bg-white min-h-screen'>
      <div className='mb-4'>
        <h2 className='text-lg font-semibold mb-4'>Seamless Roaming</h2>
        <div className='mb-4'>
          <label className='block mb-2'>
            2G handover threshold:
            <input
              type='number'
              value={handover2G}
              onChange={(e) => setHandover2G(e.target.value)}
              className='ml-2 p-2 border border-gray-300 rounded'
            />
            <span className='ml-2'>(-55dBm ~ -94dBm)</span>
          </label>
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>
            5G handover threshold:
            <input
              type='number'
              value={handover5G}
              onChange={(e) => setHandover5G(e.target.value)}
              className='ml-2 p-2 border border-gray-300 rounded'
            />
            <span className='ml-2'>(-55dBm ~ -94dBm)</span>
          </label>
        </div>
        <div className='mb-4'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              checked={enableRoaming}
              onChange={(e) => setEnableRoaming(e.target.checked)}
              className='mr-2'
            />
            Enable roaming:
            <span className='ml-2 text-yellow-500'>💡</span>
            <span className='ml-2 text-red-500'>
              When the roaming function is enabled, the WIFI names, encryption modes, and passwords of APs must be the same.
            </span>
          </label>
        </div>
        <div className='mb-4'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              checked={enable5GFirst}
              onChange={(e) => setEnable5GFirst(e.target.checked)}
              className='mr-2'
            />
            Enable 5G First:
            <span className='ml-2 text-yellow-500'>💡</span>
            <span className='ml-2 text-red-500'>
              When 5G priority is enabled, the WIFI name, encryption mode, and password between 2G and 5G on the AP must be the same.
            </span>
          </label>
        </div>
        <button
          onClick={handleSave}
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SeamlessRoaming;

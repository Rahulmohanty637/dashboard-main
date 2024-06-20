// AutoChannel.jsx
import React, { useState } from 'react';

const AutoChannel = () => {
  const [reportSwitch, setReportSwitch] = useState(true);
  const [intensiveDeployment, setIntensiveDeployment] = useState(false);
  const [timedRedistribution, setTimedRedistribution] = useState(false);

  const handleSave = () => {
    // Handle save logic
    console.log({
      reportSwitch,
      intensiveDeployment,
      timedRedistribution,
    });
  };

  return (
    <div className='p-4 max-w-md mx-auto'>
        <div className='bg-white shadow-md rounded-lg p-6'>
           <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>
                Automatic channel switch
                </label>
                <div className='flex items-center justify-between'>
                    <span>Report Switch:</span>
                    <button
                    onClick={() => setReportSwitch(!reportSwitch)}
                    className={`${
                      reportSwitch ? 'bg-green-500' : 'bg-gray-300'
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
                  >
                    <span
                     className={`${
                        reportSwitch ? 'translate-x-6' : 'translate-x-1'
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                    </button>
                </div>
           </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                    Turn on this feature when there is no channel available for intensive deployment

                    </label>
                    <div className='flex items-center'>
                        <input
                        type='checkbox'
                        checked={intensiveDeployment}
                        onChange={() => setIntensiveDeployment(!intensiveDeployment)} 
                        className='from-checkbox h-5 w-5 text-green-600'
                        />
                        <span className='ml-2 text-gray-700'>Intensive deployment network optimization</span>
                    </div>

                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2'>
                        Channel reallocation of AP on time

                    </label>
                      <div className='flex items-center'>
                        <input
                        type="checkbox"
                        checked={timedRedistribution}
                        onChange={() => setTimedRedistribution(!timedRedistribution)}
                        className='from-checkbox h-5 w-5 text-green-600'
                        />
                        <span className='ml-2 text-gray-700'>Timed  redistribution</span>
                      </div>
                </div>
                <div className='flex justify-center'>
                    <button
                    onClick={handleSave}
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                    >
                    save
                    </button>

                </div>
        </div>
    </div>
  );
};

export default AutoChannel;

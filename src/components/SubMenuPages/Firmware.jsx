import React,{useState} from 'react'

const Firmware = () => {
  const [file,setFile] = useState(null)
  const [message, setMessage] = useState('The current version is already the latest version, dos not require any upgrade!')

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  };
  const handleUpgrade = () => {
    if(file){
      console.log ('upgrading with file: ', file.name)


    }else{
      alert('please select a file to upgrade.')
    }

  };

  return (
    <div className="p-4">
    <h1 className="text-xl font-semibold mb-4">Firmware Upgrade</h1>
    <div className="mb-4">
      <label className="block text-gray-700">Upgrade by loading upgrade package</label>
      <input
        type="file"
        onChange={handleFileChange}
        className="mt-2 p-2 border border-gray-300 rounded"
      />
    </div>
    <button
      onClick={handleUpgrade}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Start to upgrade
    </button>
    <div className="mt-6 p-4 border-t border-gray-300">
      <p className="text-gray-700">{message}</p>
    </div>
  </div>
  )
}

export default Firmware

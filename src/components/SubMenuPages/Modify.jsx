import React,{useState} from 'react'

const Modify = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleModifyPassword = () => {
    if (newPassword !== confirmPassword){
      setMessage('New password and confirm password do not match.')
      return;
    }
    console.log('OldPassword:', oldPassword)
    console.log('NewPassword:',newPassword)
    console.log('ConfirmPassword:',confirmPassword)
    setMessage('Password has been modified successfully')

  };

  return (
    <div className='p-4'>
      <h1 className='text-xl font-semibold mb-4 '>Modify Password</h1>
      <div className='mb-4 p-4 border border-yellow-400 bg-yellow-100 text-yellow-500'>
        <p> Modify the syste password, please remember the new password,the defauly password is:admin</p>
      </div>
      <div className='mb-4'>
        <lable className='block text-gray-700 mb-2'>Old Password:</lable>
        <input
        type='password'
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        className='w-full p-2 border border-gray-300 rounded'
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 mb-2">New password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Confirm password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={handleModifyPassword}
        className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
      >
        Modify password
      </button>
      {message && (
        <div className="mt-4 p-4 border-t border-gray-300 text-red-500">
          <p>{message}</p>
        </div>
      )}

      
    </div>
  )
}

export default Modify

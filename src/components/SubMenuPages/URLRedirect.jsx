import React, { useState } from 'react';

const URLRedirect = () => {
  const [urlRedirects, setUrlRedirects] = useState([]);
  const [newRedirect, setNewRedirect] = useState({ originalUrl: '', redirectedUrl: '' });

  const handleInputChange = (e) => {
    setNewRedirect({ ...newRedirect, [e.target.name]: e.target.value });
  };

  const handleAddRedirect = () => {
    if (newRedirect.originalUrl && newRedirect.redirectedUrl) {
      setUrlRedirects([...urlRedirects, { ...newRedirect, id: Date.now() }]);
      setNewRedirect({ originalUrl: '', redirectedUrl: '' });
    } else {
      alert('Please fill in both fields.');
    }
  };

  const handleDeleteRedirect = (id) => {
    setUrlRedirects(urlRedirects.filter((redirect) => redirect.id !== id));
  };

  return (
    <div className='p-6 max-w-full mx-auto bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold mb-4'>URL Redirect</h1>
      <div className='flex mb-4'>
        <input
          type='text'
          name='originalUrl'
          value={newRedirect.originalUrl}
          onChange={handleInputChange}
          placeholder='Original URL'
          className='px-2 py-2 border rounded-lg mr-2'
        />
        <input
          type='text'
          name='redirectedUrl'
          value={newRedirect.redirectedUrl}
          onChange={handleInputChange}
          placeholder='Redirected URL'
          className='px-2 py-2 border rounded-lg mr-2'
        />
        <button
          onClick={handleAddRedirect}
          className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
        >
          Add
        </button>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='px-4 py-2 border'>SN</th>
              <th className='px-4 py-2 border'>Original URL</th>
              <th className='px-4 py-2 border'>Redirected URL</th>
              <th className='px-4 py-2 border'>Operation</th>
            </tr>
          </thead>
          <tbody>
            {urlRedirects.length === 0 ? (
              <tr>
                <td className='px-4 py-2 border' colSpan='4' align='center'>
                  There is no URL redirect defined currently, please add one.
                </td>
              </tr>
            ) : (
              urlRedirects.map((redirect, index) => (
                <tr key={redirect.id}>
                  <td className='px-4 py-2 border'>{index + 1}</td>
                  <td className='px-4 py-2 border'>{redirect.originalUrl}</td>
                  <td className='px-4 py-2 border'>{redirect.redirectedUrl}</td>
                  <td className='px-4 py-2 border'>
                    <button
                      onClick={() => handleDeleteRedirect(redirect.id)}
                      className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default URLRedirect;

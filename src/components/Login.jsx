// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// // const Login = ({ setAuth }) => {
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     password: ''
// //   });
// //   const [error, setError] = useState(null);
// //   const history = useHistory();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const { data } = await axios.post('https://iot.yowifi.net/cloudnetlot/backend/auth/token', formData, {
// //         headers: {
// //           'Content-Type': 'application/json'
// //         }
// //       });
// //       localStorage.setItem('authToken', data.token);
// //       setAuth(true);
// //       history.push('/');
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   return (
// //     <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
// //       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
// //         <h2 className="text-2xl font-semibold mb-4">Login</h2>
// //         <form onSubmit={handleSubmit} className="mb-6">
// //           <input
// //             type="text"
// //             name="username"
// //             placeholder="Username"
// //             value={formData.username}
// //             onChange={handleChange}
// //             className="mb-2 p-2 border border-gray-300 rounded w-full"
// //           />
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             className="mb-2 p-2 border border-gray-300 rounded w-full"
// //           />
// //           <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full">
// //             Login
// //           </button>
// //         </form>
// //         {error && <div className="mt-4 p-4 bg-red-100 rounded">{error}</div>}
// //       </div>
// //     </div>
// //   );
// };

// export default Login;
 import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setErrorMessage('Both fields are required.');
      return;
    }

    try {
      const response = await axios.post('https://iot.yowifi.net/cloudnetlot/backend/auth/token', {
        username,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = response.data;
     // localStorage.setItem('authToken', data.token);
     // setAuth(true);
      console.log(data);
      navigate('/home');
    } catch (error) {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

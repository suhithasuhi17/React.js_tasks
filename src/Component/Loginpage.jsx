import React, { useState } from 'react';



const LoginPage = () => {
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage('Login button clicked!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white rounded-2xl shadow-2xl flex w-3/4 max-w-4xl">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Welcome Back!</h2>
          <div className="flex flex-col items-center mb-6">
            <img
              
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <p className="mt-4 text-gray-600">User Profile</p>
          </div>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="mobile" className="block text-gray-600 font-medium mb-2">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                placeholder="Enter your mobile number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-600 font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>
          {message && <p className="text-center text-green-500 mt-4">{message}</p>}
          <p className="text-center text-gray-600 text-sm mt-4">
            Don't have an account? <a href="#" className="text-blue-500 font-medium">Sign up</a>
          </p>
        </div>

  
      </div>
    </div>
  );
};

export default LoginPage;

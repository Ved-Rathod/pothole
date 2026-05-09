import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
      <div className="p-8 bg-slate-800 rounded shadow-lg max-w-sm w-full border border-slate-700">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full mb-4 p-2 rounded bg-slate-700 border border-slate-600 outline-none focus:border-blue-500" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full mb-6 p-2 rounded bg-slate-700 border border-slate-600 outline-none focus:border-blue-500" 
        />
        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded transition-colors">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;

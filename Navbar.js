import React from 'react';
import { Activity } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2">
        <Activity className="text-blue-500" />
        <span className="font-bold text-xl tracking-wide">Pothole Radar</span>
      </div>
      <div className="flex gap-4">
        <button className="text-sm text-slate-300 hover:text-white transition">Dashboard</button>
        <button className="text-sm text-slate-300 hover:text-white transition">Routes</button>
        <button className="text-sm bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded transition">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;

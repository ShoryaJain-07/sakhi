import React from 'react'
import {vaccines} from '../../constants/index.js'

const Tracker = () => {
  return (
    <div className="w-full">
      <div className="w-full text-6xl font-bold text-red-400 p-8">Tracker</div>
      <div className="w-full p-10 flex items-center justify-center">
        <div className="h-screen border-l-8 border-red-400">
          {vaccines.map((vaccine) => (
            <div className="h-1/5 text-2xl font-bold text-black ml-4">• {vaccine}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tracker
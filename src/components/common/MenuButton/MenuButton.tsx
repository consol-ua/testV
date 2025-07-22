'use client';

import React from 'react';

function MenuButton() {
  return (
    <div>
      <button
        className="relative cursor-pointer flex overflow-hidden items-center justify-center rounded-full w-10 h-10 transform transition-all ring-0 ring-gray-300 hover:ring-2 focus:ring-4 ring-opacity-30 duration-200 shadow-md"
        onClick={() => console.log('click')}
      >
        <div className="relative flex flex-col justify-between h-4 transform transition-all duration-300 origin-center overflow-hidden">
          <div className="bg-white h-0.5 w-7" />
          <div className="bg-white h-0.5 w-7" />
          <div className="bg-white h-0.5 w-7" />
        </div>
      </button>
    </div>
  );
}
export default MenuButton;

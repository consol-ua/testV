'use client';

import React, { useCallback, useState } from 'react';

function MenuButton() {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback<() => void>(() => {
    setActive((prevVal) => !prevVal);
  }, []);

  return (
    <div>
      <button className="relative" onClick={toggleActive}>
        <div
          className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-4 ring-opacity-30 duration-200 shadow-md
            ${active ? 'ring-2' : ''}
          `}
        >
          <div
            className={`relative flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden
            `}
          >
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left
                ${active ? 'translate-x-10' : ''}
              `}
            />
            <div
              className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75
                ${active ? 'translate-x-10' : ''}
              `}
            />
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150
                ${active ? 'translate-x-10' : ''}
              `}
            />
            <div
              className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex
                ${active ? 'translate-x-0 w-12' : '-translate-x-10 w-0'}
              `}
            >
              <div
                className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300
                  ${active ? 'rotate-45' : 'rotate-0'}
                `}
              />
              <div
                className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300
                  ${active ? '-rotate-45' : '-rotate-0'}
                `}
              />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
export default MenuButton;

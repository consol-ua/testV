'use client';

import React from 'react';

import { useMainSidebarState } from '@/components/sidebar/MainSidebar/hooks/useMainSidebarState';

function MenuButton() {
  const { handleOpenSideBar } = useMainSidebarState();

  return (
    <div>
      <button
        className="relative cursor-pointer flex overflow-hidden items-center justify-center rounded-full w-10 h-10 transform transition-all ring-0 ring-gray-300 hover:ring-2 focus:ring-4 ring-opacity-30 duration-200 shadow-md"
        onClick={handleOpenSideBar}
      >
        <div className="flex flex-col justify-between h-4 overflow-hidden">
          <div className="bg-white h-0.5 w-7" />
          <div className="bg-white h-0.5 w-7" />
          <div className="bg-white h-0.5 w-7" />
        </div>
      </button>
    </div>
  );
}
export default MenuButton;

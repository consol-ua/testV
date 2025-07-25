'use client';

import React from 'react';
import Link from 'next/link';

import { useMainSidebarState } from './hooks/useMainSidebarState';

import { CloseButton } from './components/CloseButton';
import { VyriyLogo } from '@/icons/VyriyLogo';

function MainSidebar() {
  const { handleCloseSideBar, visible } = useMainSidebarState();

  return (
    <>
      {visible && (
        <div
          className="bg-black/50 fixed inset-0"
          onClick={handleCloseSideBar}
        />
      )}

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 w-80 h-screen p-6 pb-10 sm:p-10 overflow-y-auto transition-transform bg-white/[0.05] border-r-1 border-solid border-[#999999] backdrop-blur-[156.17px] ${visible ? 'translate-x-0' : '-translate-x-full'}`}
        tabIndex={-1}
      >
        <div className="flex items-center space-x-4 sm:space-x-10">
          <CloseButton />
          <Link href={'/'} onClick={handleCloseSideBar}>
            <VyriyLogo />
          </Link>
        </div>

        <div className="py-20">
          <Link
            href={'/stats'}
            onClick={handleCloseSideBar}
            className="block cursor-pointer w-full text-white text-xl font-semibold py-4 px-8 rounded-2xl border border-gray-600 shadow-lg transition duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 text-center"
          >
            <span></span>
            Статистика
          </Link>
        </div>
      </div>
    </>
  );
}
export default MainSidebar;

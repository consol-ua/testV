'use client';

import React from 'react';

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
          <VyriyLogo />
        </div>
      </div>
    </>
  );
}
export default MainSidebar;

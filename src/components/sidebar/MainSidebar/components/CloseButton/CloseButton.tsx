import React from 'react';

import { useMainSidebarState } from '@/components/sidebar/MainSidebar/hooks/useMainSidebarState';

function CloseButton() {
  const { handleCloseSideBar } = useMainSidebarState();

  return (
    <div
      className="relative cursor-pointer flex overflow-hidden items-center justify-center rounded-full w-10 h-10 transform transition-all ring-0 ring-gray-300 hover:ring-2 focus:ring-4 ring-opacity-30 duration-200 shadow-md"
      onClick={handleCloseSideBar}
    >
      <div className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
      <div className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
    </div>
  );
}
export default CloseButton;

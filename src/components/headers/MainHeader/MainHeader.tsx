import React from 'react';

import { MenuButton } from '@/components/common/MenuButton';

import { VyriyLogo } from '@/icons/VyriyLogo';

function MainHeader() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center space-x-4 sm:space-x-10">
        <MenuButton />
        <VyriyLogo />
      </div>

      <div className="header-right">
        <div className="time">00:09:08</div>
        <div className="profile-icon"></div>
        <div className="username">ПЕРЕМОГОСЛАВ</div>
      </div>
    </header>
  );
}
export default MainHeader;

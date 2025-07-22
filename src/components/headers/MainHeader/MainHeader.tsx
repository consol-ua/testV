import React from 'react';

import { MenuButton } from '@/components/common/MenuButton';
import { TimerHelper } from '@/components/common/TimerHelper';

import { VyriyLogo } from '@/icons/VyriyLogo';
import { UserAvatar } from '@/components/common/UserAvatar';

function MainHeader() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center space-x-4 sm:space-x-10">
        <MenuButton />
        <VyriyLogo />
      </div>

      <div className="flex items-center space-x-4 font-extra font-bold text-xl text-center leading-none tracking-widest">
        <TimerHelper className="min-w-20 h-4" />

        <UserAvatar />

        <div className="min-w-20 h-4">ПЕРЕМОГОСЛАВ</div>
      </div>
    </header>
  );
}
export default MainHeader;

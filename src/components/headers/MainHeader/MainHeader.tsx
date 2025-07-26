import React from 'react';
import Link from 'next/link';

import { MenuButton } from '@/components/headers/MainHeader/components/MenuButton';
import { TimerHelper } from '@/components/common/TimerHelper';

import { VyriyLogo } from '@/icons/VyriyLogo';
import { UserAvatar } from '@/components/common/UserAvatar';

function MainHeader() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-10">
        <MenuButton />

        <Link href={'/'}>
          <VyriyLogo />
        </Link>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4 font-extra font-bold text-lg lg:text-xl text-center leading-none tracking-widest">
        <TimerHelper withTotalTime className="min-w-20 h-4" />

        <UserAvatar />

        <div className="min-w-20 h-4 hidden sm:block">ПЕРЕМОГОСЛАВ</div>
      </div>
    </header>
  );
}
export default MainHeader;

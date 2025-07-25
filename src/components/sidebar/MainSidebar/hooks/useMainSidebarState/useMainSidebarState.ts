import { useCallback } from 'react';

import { useReactQueryState } from '@/hooks/useReactQueryState';

function useMainSidebarState() {
  const { setValue, value } = useReactQueryState(['side-bar-state'], false);

  const handleOpenSideBar = useCallback(() => {
    setValue(true);
  }, [setValue]);

  const handleCloseSideBar = useCallback(() => {
    setValue(false);
  }, [setValue]);

  return {
    handleOpenSideBar,
    handleCloseSideBar,
    visible: value
  };
}

export default useMainSidebarState;

import React, { useCallback } from 'react';

import { useSelectedOperation } from '@/hooks/useSelectedOperation';

interface MainContentButtonProps {
  operation: string;
}

function MainContentButton({ operation }: MainContentButtonProps) {
  const { setOperation } = useSelectedOperation();

  const handleSetOperation = useCallback(() => {
    setOperation(operation);
  }, [operation, setOperation]);

  return (
    <button
      className="grow cursor-pointer bg-[#e74c3c] hover:bg-[#c0392b] text-white font-medium py-1.5 lg:py-3 px-3 lg:px-6 rounded-full shadow-md transition-colors duration-200"
      onClick={handleSetOperation}
    >
      {operation}
    </button>
  );
}
export default MainContentButton;

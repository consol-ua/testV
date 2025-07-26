import React, { useCallback } from 'react';

import { useSelectedOperation } from '@/hooks/useSelectedOperation';
import { useCompletedOperations } from '@/hooks/useCompletedOperations';

import { TimerHelper } from '@/components/common/TimerHelper';

function MainContentTimer() {
  const { selectedOperation, togglePauseOperation, clearSelectedOperation } =
    useSelectedOperation();
  const { setCompletedOperations } = useCompletedOperations();

  const handleCompletedOperation = useCallback(() => {
    if (selectedOperation) {
      setCompletedOperations(
        selectedOperation.name,
        selectedOperation.timeInSeconds
      );

      clearSelectedOperation();
    }
  }, [setCompletedOperations, clearSelectedOperation, selectedOperation]);

  const isPause = selectedOperation?.pause;

  return (
    <div className="self-stretch flex flex-col items-center justify-center mb-16">
      <div className="grow sm:grow-0 flex items-center">
        <TimerHelper className="text-6xl sm:text-8xl leading-none" />
      </div>

      <div className="flex items-center gap-6 sm:gap-4">
        <button
          className="relative cursor-pointer overflow-hidden rounded-md w-12 sm:w-20 h-12 sm:h-20 transform transition-all border ring-0 ring-gray-300 hover:ring-2 focus:ring-4 ring-opacity-30 duration-200 shadow-md"
          onClick={togglePauseOperation}
        >
          <svg
            className={`h-6 sm:h-12 w-6 sm:w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out ${isPause ? '' : 'opacity-0'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>

          <div
            className={`flex items-center justify-center h-6 sm:h-10 w-6 sm:w-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out ${isPause ? 'opacity-0' : ''}`}
          >
            <div className="bg-white h-6 sm:h-10 w-0.5 mx-1 sm:mx-2"></div>
            <div className="bg-white h-6 sm:h-10 w-0.5 mx-1 sm:mx-2"></div>
          </div>
        </button>

        <button
          className="bg-[#e74c3c] hover:bg-[#c0392b] text-white text-xl sm:font-semibold px-2 sm:px-6 rounded-md shadow-md transition-colors duration-200 h-12 sm:h-20 min-w-60 sm:min-w-80"
          onClick={handleCompletedOperation}
        >
          Закінчити роботу
        </button>
      </div>
    </div>
  );
}
export default MainContentTimer;

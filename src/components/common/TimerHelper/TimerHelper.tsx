'use client';

import React, { useState, useEffect, useMemo } from 'react';

import { useSelectedOperation } from '@/hooks/useSelectedOperation';
import { useCompletedOperations } from '@/hooks/useCompletedOperations';

const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num: number) => num.toString().padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

interface TimerHelperProps {
  className?: string;
  withTotalTime?: boolean;
}

const TimerHelper: React.FC<TimerHelperProps> = ({
  className = 'font-mono text-lg',
  withTotalTime
}) => {
  const { selectedOperation, setOperationTimeInSeconds } =
    useSelectedOperation();

  const { completedOperations } = useCompletedOperations();

  const timeShift = useMemo(
    () =>
      completedOperations?.reduce((sum, item) => {
        return (
          sum + (typeof item.timeInSecond === 'number' ? item.timeInSecond : 0)
        );
      }, 0) || 0,
    [completedOperations]
  );

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (selectedOperation?.inprogress) {
      intervalId = setInterval(() => {
        setOperationTimeInSeconds(selectedOperation.timeInSeconds + 1);
        setIsVisible((prevTime) => !prevTime);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [selectedOperation, setOperationTimeInSeconds]);

  const displayTime = formatTime(
    withTotalTime
      ? timeShift + (selectedOperation?.timeInSeconds || 0)
      : selectedOperation?.timeInSeconds || 0
  );

  return (
    <div className="flex items-center space-x-1 text-white">
      {selectedOperation?.inprogress && (
        <div
          className={`
        w-1 h-1 rounded-full bg-green-500
        transition-opacity duration-500 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
        />
      )}

      {selectedOperation?.pause && (
        <div className="w-1 h-1 rounded-full bg-yellow-500 transition-opacity duration-500 ease-in-out" />
      )}

      <div className={className}>{displayTime}</div>
    </div>
  );
};

export default TimerHelper;

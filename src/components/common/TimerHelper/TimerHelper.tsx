'use client';

import React, { useState, useEffect, useCallback } from 'react';

const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num: number) => num.toString().padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

interface TimerHelperProps {
  initialTimeInSeconds?: number;
  className?: string;
}

const TimerHelper: React.FC<TimerHelperProps> = ({
  initialTimeInSeconds = 0,
  className = 'font-mono text-lg'
}) => {
  const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds);
  const [isVisible, setIsVisible] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeInSeconds((prevTime) => prevTime + 1);
        setIsVisible((prevTime) => !prevTime);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setTimeInSeconds(0);
  }, []);

  const displayTime = formatTime(timeInSeconds);

  return (
    <div className="flex items-center space-x-2 text-white">
      <div className={className}>{displayTime}</div>
      {isRunning && (
        <div
          className={`
        w-1 h-1 rounded-full bg-green-500
        transition-opacity duration-500 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
        />
      )}

      {/* <div className="flex space-x-2">
        <button
          onClick={startTimer}
          disabled={isRunning}
          className="px-3 py-1 bg-green-600 rounded-md hover:bg-green-700 disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          disabled={!isRunning}
          className="px-3 py-1 bg-red-600 rounded-md hover:bg-red-700 disabled:opacity-50"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="px-3 py-1 bg-gray-600 rounded-md hover:bg-gray-700"
        >
          Reset
        </button>
      </div> */}
    </div>
  );
};

export default TimerHelper;

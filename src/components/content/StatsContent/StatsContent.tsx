'use client';

import React from 'react';

import { useCompletedOperations } from '@/hooks/useCompletedOperations';

const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num: number) => num.toString().padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

function StatsContent() {
  const { completedOperations } = useCompletedOperations();

  return (
    <main className="flex items-center px-60">
      {completedOperations.length > 0 ? (
        <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700 space-y-4">
          {completedOperations.map((operation, index) => (
            <li key={operation.name + index}>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {operation.name}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {formatTime(operation.timeInSecond)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col">
          <p className="text-gray-300 mb-8 leading-relaxed">Немає данних</p>
        </div>
      )}
    </main>
  );
}
export default StatsContent;

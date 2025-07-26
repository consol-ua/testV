'use client';

import React from 'react';

import { useGetOperations } from '@/hooks/useGetOperations';
import { useSelectedOperation } from '@/hooks/useSelectedOperation';

import { MainContentButton } from './components/MainContentButton';
import { MainContentSearchInput } from './components/MainContentSearchInput';
import { MainContentTimer } from './components/MainContentTimer';

const SHOW_BUTTON_COUNT = 4;

function MainContent() {
  const {
    operations,
    operationsError,
    operationsIsError,
    operationsIsLoading
  } = useGetOperations();

  const { selectedOperation } = useSelectedOperation();

  if (operationsIsLoading) {
    return (
      <main className="grow h-full flex items-center justify-center px-12 lg:px-24 xl:px-60">
        <p> Loading...</p>
      </main>
    );
  }

  if (operationsIsError) {
    return (
      <main className="grow h-full flex items-center justify-center px-12 lg:px-24 xl:px-60">
        <p> Error: {(operationsError as Error).message}</p>
      </main>
    );
  }

  return (
    <main className="grow h-full flex items-center justify-center px-12 lg:px-24 xl:px-60">
      {selectedOperation ? (
        <MainContentTimer />
      ) : (
        <div className="flex flex-col justify-center">
          <h1 className="text-xl sm:text-3xl font-bold uppercase mb-2 sm:mb-4">
            ОБЕРІТЬ ОПЕРАЦІЮ
          </h1>
          <p className="text-gray-300 mb-4 sm:mb-8 leading-relaxed text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tempus magna sed diam gravida, nec suscipit ante tristique. Nullam
            vehicula porta tortor, elementum iaculis velit fringilla ut.
          </p>

          <MainContentSearchInput operations={operations} />

          <div className="flex flex-wrap gap-2 lg:gap-6">
            {operations?.map(
              (operation, index) =>
                index < SHOW_BUTTON_COUNT && (
                  <MainContentButton
                    key={operation?.name}
                    operation={operation?.name}
                  />
                )
            )}
          </div>
        </div>
      )}
    </main>
  );
}
export default MainContent;

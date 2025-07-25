'use client';

import React from 'react';

import { useGetOperations } from '@/hooks/useGetOperations';

import { MainContentButton } from './components/MainContentButton';
import { MainContentSearchInput } from './components/MainContentSearchInput';

function MainContent() {
  const {
    operations,
    operationsError,
    operationsIsError,
    operationsIsLoading
  } = useGetOperations();

  if (operationsIsLoading) {
    return (
      <main className="grow h-full flex items-center justify-center px-60">
        <p> Loading...</p>
      </main>
    );
  }

  if (operationsIsError) {
    return (
      <main className="grow h-full flex items-center justify-center px-60">
        <p> Error: {(operationsError as Error).message}</p>
      </main>
    );
  }

  return (
    <main className="grow h-full flex items-center justify-center px-60">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold uppercase mb-4">ОБЕРІТЬ ОПЕРАЦІЮ</h1>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus
          magna sed diam gravida, nec suscipit ante tristique. Nullam vehicula
          porta tortor, elementum iaculis velit fringilla ut.
        </p>

        <MainContentSearchInput operations={operations} />

        <div className="flex flex-nowrap gap-6">
          {operations?.map(
            (operation, index) =>
              index <= 2 && (
                <MainContentButton
                  key={operation?.name}
                  operation={operation?.name}
                />
              )
          )}
        </div>
      </div>
    </main>
  );
}
export default MainContent;

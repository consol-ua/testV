'use client';

import React from 'react';

import { useGetOperations } from '@/hooks/useGetOperations';

import { MainContentButton } from './components/MainContentButton';

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

        <div className="relative mb-12">
          <input
            type="text"
            placeholder="Пошук операції"
            className="w-full p-4 pl-6 pr-12 bg-[#1a1a1a] border border-gray-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

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

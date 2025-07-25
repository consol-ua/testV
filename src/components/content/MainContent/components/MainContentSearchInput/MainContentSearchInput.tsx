import React from 'react';

interface MainContentSearchInputProps {
  operations: {
    name: string;
  }[];
}

function MainContentSearchInput({ operations }: MainContentSearchInputProps) {
  const searchOperations = operations || [];

  return (
    <div className="relative mb-12">
      <input
        type="text"
        placeholder="Пошук операції"
        className="relative w-full p-4 pl-6 pr-12 bg-[#1a1a1a] border border-[#9C9C9C] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white"
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

      <div
        id="operation-dropdown"
        className="absolute w-full mt-2 bg-[#1a1a1a] border border-[#9C9C9C] rounded-lg shadow-lg overflow-hidden"
      >
        <div>
          {searchOperations.map(
            (operation, index) =>
              index <= 4 && (
                <>
                  <div className="p-4 px-6  hover:bg-gray-800 cursor-pointer">
                    Переробка
                  </div>
                  <div className="mx-6 border-solid border-t-1 border-[#9C9C9C]" />
                </>
              )
          )}
        </div>
      </div>
    </div>
  );
}
export default MainContentSearchInput;

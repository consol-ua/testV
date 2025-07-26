import { useSelectedOperation } from '@/hooks/useSelectedOperation';
import React, {
  Fragment,
  KeyboardEventHandler,
  useCallback,
  useState
} from 'react';

import OutsideClickHandler from 'react-outside-click-handler';

interface MainContentSearchInputOperation {
  name: string;
}

interface MainContentSearchInputProps {
  operations: MainContentSearchInputOperation[];
}

function searchSubstringCaseInsensitive(
  operations: MainContentSearchInputOperation[],
  searchTerm: string
) {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return operations?.filter((item) =>
    item?.name?.toLowerCase()?.includes(lowerCaseSearchTerm)
  );
}

function MainContentSearchInput({ operations }: MainContentSearchInputProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchOperations, setSearchOperations] = useState(operations || []);
  const { setOperation } = useSelectedOperation();

  const handleShowDropdown = useCallback(() => {
    setShowDropdown(true);
  }, []);

  const handleHideDropdown = useCallback(() => {
    setShowDropdown(false);
  }, []);

  const handleSearch = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    (event) => {
      if (!event.currentTarget.value) {
        setSearchOperations(operations || []);
      }

      setSearchOperations(
        searchSubstringCaseInsensitive(
          operations || [],
          event.currentTarget.value
        )
      );
    },
    [operations]
  );

  return (
    <OutsideClickHandler display="contents" onOutsideClick={handleHideDropdown}>
      <div className="relative mb-6 lg:mb-12">
        <input
          type="text"
          placeholder="Пошук операції"
          className="relative w-full p-2 sm:p-4 pl-3 sm:pl-6 pr-12 bg-[#1a1a1a] border border-[#9C9C9C] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white"
          onFocus={handleShowDropdown}
          onKeyUp={handleSearch}
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

        {showDropdown && (
          <div
            id="operation-dropdown"
            className="absolute w-full mt-2 bg-[#1a1a1a] border border-[#9C9C9C] rounded-lg shadow-lg px-1"
          >
            <div className="max-h-60 overflow-y-scroll">
              {searchOperations.map((operation, index) => (
                <Fragment key={`${operation.name}+${index}`}>
                  {index !== 0 && (
                    <div className="mx-3 sm:mx-6 border-solid border-t-1 border-[#9C9C9C]" />
                  )}

                  <div
                    className="py-2 sm:py-4 px-3 sm:px-6 hover:bg-gray-800 cursor-pointer"
                    onClick={() => {
                      setOperation(operation.name);
                    }}
                  >
                    {operation.name}
                  </div>
                </Fragment>
              ))}

              {searchOperations?.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center py-2 sm:py-4 px-3 sm:px-6">
                  Нічого не знайдено
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}
export default MainContentSearchInput;

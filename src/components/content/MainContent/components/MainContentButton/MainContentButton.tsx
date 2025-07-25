import React from 'react';

interface MainContentButtonProps {
  operation: string;
}

function MainContentButton({ operation }: MainContentButtonProps) {
  return (
    <button className="grow cursor-pointer bg-[#e74c3c] hover:bg-[#c0392b] text-white font-semibold py-3 px-6 rounded-full shadow-md transition-colors duration-200">
      {operation}
    </button>
  );
}
export default MainContentButton;

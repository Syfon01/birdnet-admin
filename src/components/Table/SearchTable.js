import React, {useState} from 'react'
import { SearchIcon } from '@heroicons/react/outline';

const SearchTable = ({ SearchTable, filteredText, placeholder }) => {
  return (
    <>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 py-2 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          onChange={SearchTable}
          value={filteredText}
          type=""
          name=""
          id=""
          className="focus:ring-primary-500 focus:border-primary-500 py-2 block w-full pl-10 sm:text-sm border border-gray-300 rounded-md"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default SearchTable
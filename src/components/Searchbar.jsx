import React from 'react';

/**
 * A controlled input component for searching.
 * @param {object} props
 * @param {string} props.searchTerm - The current value of the search input.
 * @param {Function} props.setSearchTerm - Function to update the search term.
 */
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {/* Search Icon */}
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>
      <input
        type="text"
        placeholder="Search by name or phone number..." // Updated placeholder
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg
                   leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200
                   placeholder-gray-500 dark:placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-transparent sm:text-sm"
        aria-label="Search contacts"
      />
    </div>
  );
}

export default SearchBar;


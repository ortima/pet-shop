import React from 'react'

interface SearchProps {
  handleSearch: React.ChangeEventHandler<HTMLInputElement>
}

const Search: React.FC<SearchProps> = ({ handleSearch }) => {
  return (
    <form className="min-w-[24rem]">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          onChange={handleSearch}
          name="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border-2 border-gray-500 rounded-lg bg-white focus:ring-blue-500 "
          placeholder="Корм для собак..."
          required
        />
      </div>
    </form>
  )
}

export default Search

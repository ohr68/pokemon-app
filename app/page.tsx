
export default function Search() {
  return (
    <div className="flex flex-wrap justify-center w-full">
      <div className="flex items-start justify-center my-20 w-full">
        <h1 className="font-bold text-6xl">What Pokemon are you looking for?</h1>
      </div>
      <div className="flex justify-center items-start w-full my-24">
        <div className="relative w-1/2 text-lg">
          <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none w-full">
            <svg className="w-8 h-8 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="search" name="search" className="block border-none rounded-full py-8 px-24 bg-gray-100 w-full focus:ring-red-200 text-black" placeholder="Search Pokemon, Move, Ability etc" required />
          <button type="submit" className="text-white absolute right-5 bottom-6 bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </div>
    </div>
  )
}
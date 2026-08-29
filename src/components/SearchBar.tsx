import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <form className="flex items-center gap-2 text-white bg-bg-light px-3 py-2 rounded-2xl text-lg">
      <Search className="text-blue-500" />

      <input
        className="focus:outline-none focus:ring-0 focus:border-transparent flex-1"
        type="text"
        placeholder="Search Github username..."
      />

      <button className="bg-blue-500 px-4 py-3 rounded-2xl cursor-pointer font-semibold">
        Search
      </button>
    </form>
  );
}

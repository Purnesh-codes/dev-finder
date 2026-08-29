import { useState } from 'react';
import { Search } from 'lucide-react';

type SearchBarProps = {
  onSearch: (username: string) => void;
  isLoading?: boolean;
};

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  //state for tracking user input
  const [input, setInput] = useState('');

  //handles submit event and sets the search term by lifting state up to index.tsx
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input) {
      onSearch(input.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 bg-bg-light px-4 py-2 rounded-2xl text-lg shadow-sm"
    >
      <Search className="text-blue-500 shrink-0" />

      <input
        className="focus:outline-none focus:ring-0 focus:border-transparent flex-1 bg-transparent text-white placeholder-gray-400"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search GitHub username..."
      />

      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-medium px-5 py-2.5 rounded-xl cursor-pointer transition-colors"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}

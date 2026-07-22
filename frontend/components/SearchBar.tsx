type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <div className="my-6">
      <input
        type="text"
        placeholder="Search medicines..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md border-2 border-gray-300 rounded-lg p-3 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
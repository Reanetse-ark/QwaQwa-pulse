function SearchBar() {
  return (
    <div className="mt-8 w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search events, artists, venues..."
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white placeholder-slate-400 outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default SearchBar;
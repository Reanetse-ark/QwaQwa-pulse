import SearchBar from "./SearchBar";

function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center bg-slate-950 px-8 text-center text-white">
      <h1 className="max-w-5xl text-6xl font-extrabold leading-tight md:text-7xl">
        Discover What's Happening
        <br />
        in QwaQwa
      </h1>

      <p className="mt-6 max-w-3xl text-xl text-slate-400">
        Every event. Every artist. Every venue. One place.
      </p>

      <SearchBar />

      <button className="mt-8 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">
        Explore Events
      </button>
    </section>
  );
}

export default Hero;
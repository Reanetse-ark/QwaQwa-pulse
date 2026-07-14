import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-500">
          QwaQwa Pulse
        </h1>

        <div className="flex gap-8 text-slate-300">
          <Link className="transition hover:text-blue-400" to="/">
            Home
          </Link>

          <Link className="transition hover:text-blue-400" to="/events">
            Events
          </Link>

          <Link className="transition hover:text-blue-400" to="/artists">
            Artists
          </Link>

          <Link className="transition hover:text-blue-400" to="/news">
            News
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import Navbar from "./components/Navbar";
import SingleShowCard from "./components/MovieCard";
import ShowDetailsModal from "./components/MovieModal";
import { useMovieLogic } from "./movieLogic";

function App() {
  const {
    moviesData,
    keyword,
    activeMovie,
    setActiveMovie,
    pageView,
    setPageView,
    handleSearchFilter,
  } = useMovieLogic();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
      <div>
        {/* Navigation Bar Component */}
        <Navbar
          onNavigateHome={() => setPageView("home")}
          onNavigateMovies={() => setPageView("movies")}
        />

        {/* HOME PAGE VIEW */}
        {pageView === "home" && (
          <header className="flex flex-col items-center justify-center text-center py-28 px-4 bg-linear-to-r from-slate-900 to-indigo-950 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-sm">
              <span className="text-slate-400 font-light">DISCOVER</span>{" "}
              <span className="text-indigo-400 font-bold drop-shadow-md">
                MOVIES
              </span>
            </h1>
            <p className="text-lg max-w-2xl mb-8 text-slate-300 whitespace-nowrap">
              Explore and discover your favorite movies and TV shows from around
              the world.
            </p>
            <button
              onClick={() => setPageView("movies")}
              className="bg-white text-indigo-950 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-slate-100 transition"
            >
              Explore Now
            </button>
          </header>
        )}

        {/* MOVIE LISTING & SEARCH PAGE VIEW */}
        {pageView === "movies" && (
          <main className="max-w-6xl mx-auto p-6">
            {/* Search Input Bar */}
            <div className="mb-8 relative flex items-center">
              <input
                type="text"
                placeholder="Search for a movie..."
                value={keyword}
                onChange={handleSearchFilter}
                className="w-full p-3.5 pl-4 pr-14 rounded-xl border border-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800 text-white placeholder-slate-400"
              />
              <button
                type="button"
                onClick={() => {}}
                className="absolute right-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg transition text-sm font-medium"
              >
                🔍
              </button>
            </div>

            {/* Grid layout for displaying movie cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {moviesData.map((showItem) => (
                <SingleShowCard
                  key={showItem.id}
                  item={showItem}
                  triggerDetails={(details) => setActiveMovie(details)}
                />
              ))}
            </div>
          </main>
        )}

        {/* Detailed Modal Component */}
        <ShowDetailsModal
          showInfo={activeMovie}
          dismissModal={() => setActiveMovie(null)}
        />
      </div>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-slate-400 text-center py-4 mt-12 text-sm">
        <p>© 2026 MovieExplorer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

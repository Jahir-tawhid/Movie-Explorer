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
    loading,
    error,
  } = useMovieLogic();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
      <div>
        {/* Top navigation */}
        <Navbar
          onNavigateHome={() => setPageView("home")}
          onNavigateMovies={() => setPageView("movies")}
        />

        {/* Home page */}
        {pageView === "home" && (
          <header className="flex flex-col items-center justify-center text-center py-28 px-4 bg-linear-to-r from-slate-900 to-indigo-950 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-sm">
              <span className="text-slate-400 font-light">DISCOVER</span>{" "}
              <span className="text-indigo-400 font-bold drop-shadow-md">
                MOVIES
              </span>
            </h1>
            <p className="text-lg max-w-2xl mb-8 text-slate-300">
              Explore and discover your favorite movies and TV shows worldwide.
            </p>
            <button
              onClick={() => setPageView("movies")}
              className="bg-green-600 text-indigo-950 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-slate-100 transition"
            >
              Explore Now
            </button>
          </header>
        )}

        {/* Movies page */}
        {pageView === "movies" && (
          <main className="max-w-6xl mx-auto p-6">
            {/* Search bar */}
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
                className="absolute right-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg transition text-sm font-medium"
              >
                🔍
              </button>
            </div>

            {/* Show loading */}
            {loading && (
              <div className="text-center text-indigo-400 font-semibold py-4">
                Loading movies...
              </div>
            )}

            {/* Show error */}
            {error && (
              <div className="text-center text-red-400 font-medium py-4">
                {error}
              </div>
            )}

            {/* Movie grid */}
            {!loading && !error && (
              <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {moviesData.map((showItem) => (
                  <SingleShowCard
                    key={showItem.id}
                    item={showItem}
                    triggerDetails={(details) => setActiveMovie(details)}
                  />
                ))}
              </div>
            )}
          </main>
        )}

        {/* Movie details modal */}
        <ShowDetailsModal
          showInfo={activeMovie}
          dismissModal={() => setActiveMovie(null)}
        />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 text-center py-4 mt-12 text-sm">
        <p>© 2026 MovieExplorer. Built by Md. Jahirul Islam</p>
      </footer>
    </div>
  );
}

export default App;

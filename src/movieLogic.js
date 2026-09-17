import { useState, useEffect } from "react";

// Custom hook for movie logic
export function useMovieLogic() {
  // State for storing movies list
  const [moviesData, setMoviesData] = useState([]);
  // State for search keyword
  const [keyword, setKeyword] = useState("");
  // State for currently active movie details
  const [activeMovie, setActiveMovie] = useState(null);
  // State for page view (home or movies)
  const [pageView, setPageView] = useState("home");
  // State for loading indicator
  const [loading, setLoading] = useState(false);
  // State for error messages
  const [error, setError] = useState(null);

  // Helper function to fetch data from API
  const fetchData = async (url, transformFn = (data) => data) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network error");
      const json = await response.json();
      setMoviesData(transformFn(json));
    } catch (err) {
      console.error("Failed to fetch:", err);
      setError("Something went wrong while fetching movies.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial shows list when component mounts
  useEffect(() => {
    const loadInitialShows = async () => {
      await fetchData("https://api.tvmaze.com/shows");
    };
    loadInitialShows();
  }, []);
  // Handle search input change
  const handleSearchFilter = async (e) => {
    const value = e.target.value.trim();
    setKeyword(value);

    if (value === "") {
      // Fetch all shows if search is empty
      await fetchData("https://api.tvmaze.com/shows");
    } else {
      // Fetch filtered shows by keyword
      await fetchData(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(value)}`,
        (data) => data.map((entry) => entry.show),
      );
    }
  };

  // Return all states and functions
  return {
    moviesData,
    keyword,
    activeMovie,
    setActiveMovie,
    pageView,
    setPageView,
    handleSearchFilter,
    loading,
    error,
  };
}

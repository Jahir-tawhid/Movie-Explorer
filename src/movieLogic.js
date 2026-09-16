import { useState, useEffect } from "react";

export function useMovieLogic() {
  const [moviesData, setMoviesData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [activeMovie, setActiveMovie] = useState(null);
  const [pageView, setPageView] = useState("home");

  // Fetch initial shows list from TVMaze API when component mounts
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => setMoviesData(data))
      .catch((error) => console.error("Failed to fetch shows:", error));
  }, []);

  // Handle live search input change and API filtering
  const handleSearchFilter = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value.trim() === "") {
      fetch("https://api.tvmaze.com/shows")
        .then((response) => response.json())
        .then((data) => setMoviesData(data));
    } else {
      fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
        .then((response) => response.json())
        .then((data) => {
          const formattedResults = data.map((entry) => entry.show);
          setMoviesData(formattedResults);
        });
    }
  };

  return {
    moviesData,
    keyword,
    activeMovie,
    setActiveMovie,
    pageView,
    setPageView,
    handleSearchFilter,
  };
}

import MovieCard from "../components/MovieCard";
import { searchMovie, getPopularMovies } from "../services/API";
import { useState, useEffect } from "react";
import "../css/Home.css";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const populaterMovies = await getPopularMovies();
        setMovies(populaterMovies);
      } catch (err) {
        console.log(err);
        setError("Error in fetching movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  //   useEffect(() => {
  //     const loadSearchedMovies = async () => {
  //       setLoading(true);
  //       try {
  //         const searchMovies = await searchMovie(searchQuery);
  //         setMovies(searchMovies);
  //       } catch (err) {
  //         console.log(err);
  //         setError("Error in fetching searched movies");
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     loadSearchedMovies();
  //   }, []);

  const handelSearch = (event: any) => {
    event.preventDefault();
    console.log("searching for", searchQuery);
    setLoading(true);
  };

  return (
    <>
      <div className="home">
        <form className="search-form" onSubmit={handelSearch}>
          <input
            type="text"
            placeholder="Search for a movie"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie["id"]} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;

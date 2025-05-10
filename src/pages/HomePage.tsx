import MovieCard from "../components/MovieCard";
import { searchMovie, getPopularMovies } from "../services/Api";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { Typography } from "@mui/material";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSearch, setIsSearch] = useState(false);

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

  const handelSearch = async (event: any) => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      return;
    }
    console.log("searching for", searchQuery);
    {
      loading ? null : setLoading(true);
    }
    try {
      const searchMovies = await searchMovie(searchQuery);
      setMovies(searchMovies);
      setIsSearch(true);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Error in fetching searched movies");
    } finally {
      setLoading(false);
    }
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
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        {!isSearch && (
          <Typography variant="h1" sx={{ m: 3 }}>
            Popular Movies
          </Typography>
        )}

        {error && <div className="error-message">{error}</div>}
        {loading ? (
          <Typography variant="h2" sx={{ textAlign: "center", mt: 5 }}>
            <b>Loading...</b>
          </Typography>
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

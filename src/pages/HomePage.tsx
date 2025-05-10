import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "Movie 1", releaseDate: "2005", img: "" },
    { id: 2, title: "Movie 2", releaseDate: "2006", img: "" },
    { id: 3, title: "Movie 3", releaseDate: "2007", img: "" },
    { id: 4, title: "Movie 4", releaseDate: "2008", img: "" },
    { id: 5, title: "Movie 5", releaseDate: "2009", img: "" },
    { id: 6, title: "Movie 6", releaseDate: "2010", img: "" },
    { id: 7, title: "Movie 7", releaseDate: "2011", img: "" },
    { id: 8, title: "Movie 8", releaseDate: "2012", img: "" },
    { id: 9, title: "Movie 9", releaseDate: "2013", img: "" },
    { id: 10, title: "Movie 10", releaseDate: "2014", img: "" },
  ];

  const handelSearch = (event: any) => {
    event.preventDefault();
    console.log("searching for", searchQuery);
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
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase()) && (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  releaseDate={movie.releaseDate}
                  img={movie.img}
                  favourite={() => {
                    console.log("favourite");
                  }}
                />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;

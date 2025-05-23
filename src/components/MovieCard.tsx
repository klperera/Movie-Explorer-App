import "../css/MovieCard.css";

function MovieCard({ movie }: any) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title + "image"}
        />
        <div className="movie-overlay">
          <button
            className="favorite-btn"
            onClick={() => {
              console.log("favorite", movie.title);
            }}
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 28.72a3 3 0 0 1-2.13-.88l-10.3-10.3a8.72 8.72 0 0 1-2.52-6.25 8.06 8.06 0 0 1 8.14-8A8.06 8.06 0 0 1 15 5.68l1 1 .82-.82a8.39 8.39 0 0 1 11-.89 8.25 8.25 0 0 1 .81 12.36l-10.5 10.51a3 3 0 0 1-2.13.88ZM9.15 5.28A6.12 6.12 0 0 0 4.89 7a6 6 0 0 0-1.84 4.33A6.72 6.72 0 0 0 5 16.13l10.3 10.3a1 1 0 0 0 1.42 0l10.51-10.52a6.25 6.25 0 0 0 1.77-4.8 6.18 6.18 0 0 0-2.43-4.55 6.37 6.37 0 0 0-8.37.71L16.71 8.8a1 1 0 0 1-1.42 0l-1.7-1.7a6.28 6.28 0 0 0-4.4-1.82Z"
                data-name="Layer 54"
                fill="#ffffff"
                className="fill-101820"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;

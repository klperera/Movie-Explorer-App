import "../css/MovieCard.css";

export interface Props {
  title: string;
  releaseDate: string;
  img: string;
  favourite: () => void;
}

function MovieCard({ title, img, releaseDate, favourite }: Props) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={img} alt={title + "image"} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={favourite}></button>
        </div>
        <div className="movie-info">
          <h3>{title}</h3>
          <p>{releaseDate}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
